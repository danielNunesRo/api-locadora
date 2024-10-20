import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { GetMoviesService } from "../services/getMovies/service/getMovies.service";
import { GetMoviesOutputDto } from "../services/getMovies/dto/getMoviesOutput.dto";
import { JwtAuthGuard } from "src/auth/services/JwtAuthGuard";
import { RolesGuard } from "src/auth/services/rolesGuard.service";
import { getMoviesByNameService } from "../services/getMoviesByName/service/getMoviesByName.service";
import { GetMoviesByNameInputDto } from "../services/getMoviesByName/dto/getMoviesByNameInput.dto";
import { GetMoviesByNameOutputDto } from "../services/getMoviesByName/dto/getMoviesByNameOutput.dto";

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('movies')
@Controller('movies')
export class MoviesController {

    constructor(private readonly getMoviesService: GetMoviesService,
                private readonly getMoviesByNameService: getMoviesByNameService
    ) {}

    
    @Get()
    @ApiOkResponse({isArray: true})
    async getMovies(): Promise<GetMoviesOutputDto[]> {
        return await this.getMoviesService.execute();
    }

    @Get('/name')
    @ApiOkResponse({isArray: true})
    @ApiBadRequestResponse({status: 400,description: 'Nenhum filme foi encontrado com esse nome'})
    async getMoviesByName(@Query() dto:GetMoviesByNameInputDto): Promise<GetMoviesByNameOutputDto[]> {
        return await this.getMoviesByNameService.execute(dto);
    }


}