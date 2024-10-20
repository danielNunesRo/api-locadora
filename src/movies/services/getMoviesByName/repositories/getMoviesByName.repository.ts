import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { GetMoviesByNameOutputDto } from "../dto/getMoviesByNameOutput.dto";

@Injectable()
export class GetMoviesByNameRepository{
    
    constructor(private readonly db: DatabaseService) {}

    async GetMoviesByNameRepository(nome:string): Promise<GetMoviesByNameOutputDto[]> {

        const sql = `
            SELECT 
                a.id,
                a.nome,
                a.disponible,
                c.nome as category_name
            FROM ALLMOVIES a
            INNER JOIN category c ON c.id = a.id_category
            WHERE a.nome LIKE '%${nome}%'
        
        `
        return await this.db.query(sql);

    }


}