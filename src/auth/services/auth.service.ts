import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUsuarioInputDto } from "./dto/createUser.dto";
import * as bcrypt from 'bcryptjs';
import { AuthRepository } from "./authService.repositores";

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService, private readonly repository: AuthRepository) {}

    async createUsuario(dto: CreateUsuarioInputDto) {
        const hashedPassword = await bcrypt.hash(dto.senha, 10);
        dto.senha = hashedPassword;

        try {
            return await this.repository.createUsuario(dto);
        } catch (error) {
            throw new InternalServerErrorException('Erro ao cadastrar usuário, tente novamente.')
        }
    }

}