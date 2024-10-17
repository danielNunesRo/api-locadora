import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { CreateUsuarioInputDto } from "../services/dto/createUser.dto";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/create')
    @ApiCreatedResponse()
    @ApiInternalServerErrorResponse()
    async createUser(@Body() dto: CreateUsuarioInputDto) {
        return this.authService.createUsuario(dto);
    }

}