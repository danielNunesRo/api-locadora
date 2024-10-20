import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { GetMoviesService } from "./getMovies/service/getMovies.service";
import { GetMoviesRepository } from "./getMovies/repositories/getMovies.repository";
import { MoviesController } from "../controller/movies.controller";
import { getMoviesByNameService } from "./getMoviesByName/service/getMoviesByName.service";
import { GetMoviesByNameRepository } from "./getMoviesByName/repositories/getMoviesByName.repository";


@Module({
    imports: [DatabaseModule],
    controllers: [MoviesController],
    providers: [GetMoviesService, GetMoviesRepository, getMoviesByNameService, GetMoviesByNameRepository],
})

export class moviesServiceModule {}