import { Controller, Get, UseGuards } from '@nestjs/common';
import { RoleGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/guards/role/roles.decorator';
import { Role } from 'src/guards/role/roles.enum';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RoleGuard)
    @Roles(Role.Admin)
    getAdminData() {
        return { message: "only admin can access" }
    }
    @Get('user-data')
    getUserData() {
        return { message: "Any one can access" }
    }
}
