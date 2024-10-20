import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { PipelineDestinationIterableFunction } from "stream";
import { GetMoviesOutputDto } from "../dto/getMoviesOutput.dto";

@Injectable()
export class GetMoviesRepository {

    constructor(private readonly db: DatabaseService) {}

    async getMovies(): Promise<GetMoviesOutputDto[]> {

        const sql = `
            SELECT a.*, c.nome AS category_name
            FROM allmovies a
            INNER JOIN category c ON c.id = a.id_category
        `

         return await this.db.query(sql);

    }

}