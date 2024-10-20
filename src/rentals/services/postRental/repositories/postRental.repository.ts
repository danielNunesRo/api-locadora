import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { PostRentalInputDto } from "../dto/postRentalInput.dto";
import { PostRentalOutputDto} from "../dto/postRentalOutput.dto";


@Injectable()
export class PostRentalRepository {

    constructor(private readonly db: DatabaseService) {}


    async postRental(dto: PostRentalInputDto) {
        const sql = `
            INSERT INTO RENTALS_MOVIE (id_users, id_movies, data_devolucao_rentals) 
            VALUES (:id_users, :id_movies, TO_DATE(:data_devolucao_rentals, 'YYYY-MM-DD'))
        
        `

        const binds = {
            id_users: dto.id_users,
            id_movies: dto.id_movie,
            data_devolucao_rentals: dto.data_devolucao_rentals
        }

        return await this.db.query(sql, binds);

    }

    async updateMovie(idMovie: number) {
        const sql = `
            UPDATE allmovies
            SET disponible = 0
            WHERE id = :id
        `
        const bind = {
            id: idMovie
        }

        return await this.db.query(sql, bind);
    }

    async findMovie(idMovie: number): Promise<PostRentalOutputDto> {
        const sql = `
            SELECT * FROM allmovies
            WHERE id = :id
        
        `

        const bind = {
            id: idMovie
        }

        const response = await this.db.query<PostRentalOutputDto>(sql, bind);
        return response[0]?? undefined;
       
    }



}