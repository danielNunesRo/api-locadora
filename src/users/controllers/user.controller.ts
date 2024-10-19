import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/services/JwtAuthGuard";

@UseGuards(JwtAuthGuard)
@Controller('/users')
export class UserController {


    @Get('/getUsers')
    async getUsers() {
        return 'Olá, rota protegida!'
    }

}