import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private Student = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Jim Brown', age: 21 },
    ]

    getAllStudents() {
        return this.Student;
    }

    getStudentById(id: number) {
        const student = this.Student.find(student => student.id === id);
        if(!student) throw new NotFoundException('Student not found');
        return student;
    }

    createStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(), 
            ...data
        };
        this.Student.push(newStudent);
        return newStudent;
    }

    updateStudent(id: number, data: {name: string, age: number}){
        const Index = this.Student.findIndex(student => student.id === id);
        if(Index === -1) throw new NotFoundException('Student not found');
        this.Student[Index] = {id, ...data};
        return this.Student[Index];
    }

    patchStudent(id: number, data: Partial<{name: string, age: number}>){
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    deleteStudent(id: number) {
        const Index = this.Student.findIndex(student => student.id === id);
        if(Index === -1) throw new NotFoundException('Student not found');
        const deleted = this.Student.splice(Index, 1);
        return { message: 'Student deleted successfully', student: deleted[0] };
    }
}
