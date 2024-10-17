import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateUsuarioInputDto } from "./dto/createUser.dto";

@Injectable()
export class AuthRepository {

    constructor(private readonly db: DatabaseService) {}

    async createUsuario(dto: CreateUsuarioInputDto) {

        const sql = `
            INSERT INTO allusers (nome, email, senha) 
            VALUES (:nome, :email, :senha)
        `
        const binds = {
            nome: dto.nome,
            email: dto.email,
            senha: dto.senha,
        }

        await this.db.query(sql, binds);

    }

}