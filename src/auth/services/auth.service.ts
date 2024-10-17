import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUsuarioInputDto } from "./dto/createUser.dto";
import * as bcrypt from 'bcryptjs';
import { AuthRepository } from "./authService.repositores";
import { LoginInputDto } from "./dto/login.dto";

export interface User {
    ID: number;
    NOME: string;
    EMAIL: string;
    SENHA: string;
    ROLE: string;
    ATIVO: number;
    DATA_CRIACAO: Date;
}


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

    async login(dto: LoginInputDto) {
        const user = await this.repository.findByEmail(dto.email);

        if(!user) {
            throw new BadRequestException('Email do usuário não cadastrado no sistema!');
        }

        if (!user.SENHA) {
            throw new BadRequestException('Senha do usuário não encontrada.'); 
        }

        const isPasswordValid = await bcrypt.compare(dto.senha, user.SENHA);

        if (!isPasswordValid) {
            throw new BadRequestException('Senha incorreta'); 
        }

        const payload = { email: user.EMAIL, sub: user.ID }; 
        return {
            access_token: this.jwtService.sign(payload), 
        };
    }

}