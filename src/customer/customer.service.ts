import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = []

    getAllCustomer(): Customer[] {
        return this.customers
    }

    addcustomer(createCustomerDto: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
            id: Date.now(),
            ...createCustomerDto
        };
        this.customers.push(newCustomer)
        return newCustomer
    }
}
