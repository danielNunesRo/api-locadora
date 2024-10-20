import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { GetMoviesService } from "./getMovies/service/getMovies.service";
import { GetMoviesRepository } from "./getMovies/repositories/getMovies.repository";
import { MoviesController } from "../controller/movies.controller";


@Module({
    imports: [DatabaseModule],
    controllers: [MoviesController],
    providers: [GetMoviesService, GetMoviesRepository],
})

export class moviesServiceModule {}