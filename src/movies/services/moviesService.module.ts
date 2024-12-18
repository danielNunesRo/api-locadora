import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { GetMoviesService } from "./getMovies/service/getMovies.service";
import { GetMoviesRepository } from "./getMovies/repositories/getMovies.repository";
import { MoviesController } from "../controller/movies.controller";
import { getMoviesByNameService } from "./getMoviesByName/service/getMoviesByName.service";
import { GetMoviesByNameRepository } from "./getMoviesByName/repositories/getMoviesByName.repository";
import { PostMovieService } from "./postMovie/service/postMovie.service";
import { PostMovieRepository } from "./postMovie/repositories/postMovie.repository";
import { ConfigModule } from "@nestjs/config";
import { DeleteMovieByIdService } from "./deleteMovieById/service/deleteMovieById.service";
import { DeleteMovieByIdRepository } from "./deleteMovieById/repositories/deleteMovieById.repository";


@Module({
    imports: [DatabaseModule, ConfigModule],
    controllers: [MoviesController],
    providers: [GetMoviesService, 
                GetMoviesRepository, 
                getMoviesByNameService, 
                GetMoviesByNameRepository,
                PostMovieService,
                PostMovieRepository,
                DeleteMovieByIdService,
                DeleteMovieByIdRepository ],
})

export class moviesServiceModule {}