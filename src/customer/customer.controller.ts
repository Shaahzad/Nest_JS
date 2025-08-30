import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    getCustomer() {
        return this.customerService.getAllCustomer()
    }

    @Post()
    addCustomer(@Body() CreateCustomerDto: CreateCustomerDto) {
        this.customerService.addcustomer(CreateCustomerDto)
    }

}
