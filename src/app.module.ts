import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { NyNameController } from './ny-name/ny-name.controller';
import { NyNameModule } from './ny-name/ny-name.module';
import { UserRolesController } from './user-roles/user-roles.controller';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule, NyNameModule],
  controllers: [AppController, UserController, ProductController, NyNameController, UserRolesController],
  providers: [AppService, ProductService],
})
export class AppModule {}
