import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    @UseGuards(AuthGuard)
    getProduct(){
        return this.productService.getAllProduct();
    }
    @Get(':id')
    getProductById(@Param('id') id: string){
        return this.productService.getProductById(Number(id));

    }
}
