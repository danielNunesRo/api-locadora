import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { CreateUsuarioInputDto } from "../services/dto/createUser.dto";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { LoginInputDto } from "../services/dto/login.dto";

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({ summary: 'Logar com o usuario ja existente' }) 
    @Post('/login')
    async login(@Body() dto: LoginInputDto) {
        return this.authService.login(dto);
    }

    @Post('/create')
    @ApiOperation({ summary: 'Registrar um novo usuário' }) 
    @ApiCreatedResponse()
    @ApiInternalServerErrorResponse()
    async createUser(@Body() dto: CreateUsuarioInputDto) {
        return this.authService.createUsuario(dto);
    }

}