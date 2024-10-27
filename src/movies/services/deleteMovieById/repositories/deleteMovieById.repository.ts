import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { DeleteMoviesByIdInputDto } from "../dto/deleteMoviesByIdInput.dto";

@Injectable()
export class DeleteMovieByIdRepository {

    constructor(private readonly db: DatabaseService) {}

    async deleteMovieById(dto: DeleteMoviesByIdInputDto) {
        
        
        const sql = `UPDATE allmovies
                    SET DELETE_AT = SYSDATE,
                    DELETE_BY = :id_user
                    WHERE id = :id_movie`
        const binds = {
            id_user: dto.id_usuario,
            id_movie: dto.id_movie
        }

        return await this.db.query(sql, binds);


    }
        
    async findMovieById(id: number) {

        const sql = ` SELECT 
                a.id,
                a.nome,
                a.disponible,
                c.nome as category_name
            FROM ALLMOVIES a
            INNER JOIN category c ON c.id = a.id_category
            WHERE a.id = :id`

        const binds = {id}

        const response = await this.db.query(sql, binds);

        return response[0] ?? undefined;
    }

    async findMovieDeleted(id: number) {
        const sql = `SELECT * FROM allmovies
                        WHERE DELETE_AT IS NOT NULL
                        AND DELETE_BY IS NOT NULL
                        AND ID = :id`
        const binds = {id}
        
        const response = await this.db.query(sql, binds);

        return response[0] ?? undefined;
    }
}