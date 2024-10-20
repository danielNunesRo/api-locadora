import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateUsuarioInputDto } from "./dto/createUser.dto";
import { User } from "./auth.service";

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

    async findByEmail(email: string): Promise<User> {
        const sql = `
            SELECT id, nome, email, senha, role FROM allusers WHERE email = :email
        `

        const binds = { email }

        const users = await this.db.query<User>(sql, binds);
        return users[0];
    }

}