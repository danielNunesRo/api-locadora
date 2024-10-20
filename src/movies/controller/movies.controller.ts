import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { GetMoviesService } from "../services/getMovies/service/getMovies.service";
import { GetMoviesOutputDto } from "../services/getMovies/dto/getMoviesOutput.dto";
import { JwtAuthGuard } from "src/auth/services/JwtAuthGuard";
import { RolesGuard } from "src/auth/services/rolesGuard.service";

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('movies')
@Controller('movies')
export class MoviesController {

    constructor(private readonly getMoviesService: GetMoviesService) {}

    @ApiOkResponse({isArray: true})
    @Get()
    async getMovies(): Promise<GetMoviesOutputDto[]> {
        return await this.getMoviesService.execute();
    }


}