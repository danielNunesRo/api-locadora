import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { PostMovieInputDto } from "../dto/postMovieInput.dto";
import * as oracledb from 'oracledb';

@Injectable()
export class PostMovieRepository {

    constructor(private readonly db: DatabaseService) {}

    async postMovie(dto: PostMovieInputDto) {

        const sql = `INSERT INTO ALLMOVIES (NOME, ID_CATEGORY, URL_IMG) VALUES (:NOME, :ID_CATEGORY, :URL_IMG)`

        const binds = {
            nome: dto.nome,
            id_category: dto.id_category,
            url_img: dto.url_img
        };

        return await this.db.query(sql, binds);

    }
}