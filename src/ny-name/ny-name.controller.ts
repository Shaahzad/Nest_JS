import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('ny-name')
export class NyNameController {
    @Post('custom')
    transformName(@Body('name', new UppercasePipe()) name: string){
        return {message: `Received name: ${name}`}
    }
}
