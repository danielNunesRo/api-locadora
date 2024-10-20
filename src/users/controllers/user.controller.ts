import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { Role } from "src/auth/services/enums/role.enum";
import { JwtAuthGuard } from "src/auth/services/JwtAuthGuard";
import { Roles } from "src/auth/services/roles.decorator";
import { RolesGuard } from "src/auth/services/rolesGuard.service";
import { GetUsersByIdService } from "../service/getUsersById/service/getUsersById.service";
import { GetUsersByIdDtoInput } from "../service/getUsersById/dto/getUsersByIdInput.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('/users')
export class UserController {

    constructor(private readonly getUserByIdService: GetUsersByIdService) {}
    
    @Roles(Role.COMUM)
    @Get('/userById')
    async getUserById(@Query() dto: GetUsersByIdDtoInput) {
        return await this.getUserByIdService.execute(dto)
    }
    

    @Get('/getUsers')
    async getUsers() {
        return 'Olá, rota protegida! Somente ADM'
    }


    @Get('/members')
    getMembers() {
        return 'Só para membros';
    }

}