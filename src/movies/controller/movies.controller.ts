import { Body, Controller, Delete, Get, Post, Put, Query, Request, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { GetMoviesService } from "../services/getMovies/service/getMovies.service";
import { GetMoviesOutputDto } from "../services/getMovies/dto/getMoviesOutput.dto";
import { JwtAuthGuard } from "src/auth/services/JwtAuthGuard";
import { RolesGuard } from "src/auth/services/rolesGuard.service";
import { getMoviesByNameService } from "../services/getMoviesByName/service/getMoviesByName.service";
import { GetMoviesByNameInputDto } from "../services/getMoviesByName/dto/getMoviesByNameInput.dto";
import { GetMoviesByNameOutputDto } from "../services/getMoviesByName/dto/getMoviesByNameOutput.dto";
import { PostMovieService } from "../services/postMovie/service/postMovie.service";
import { PostMovieInputDto } from "../services/postMovie/dto/postMovieInput.dto";
import { Express } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { DeleteMoviesByIdInputDto } from "../services/deleteMovieById/dto/deleteMoviesByIdInput.dto";
import { DeleteMovieByIdService } from "../services/deleteMovieById/service/deleteMovieById.service";



@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('movies')
@Controller('movies')
export class MoviesController {

    constructor(private readonly getMoviesService: GetMoviesService,
                private readonly getMoviesByNameService: getMoviesByNameService,
                private readonly postMovieService: PostMovieService,
                private readonly deleteMovieByIdService: DeleteMovieByIdService
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

    @Post()
    @UseInterceptors(FileInterceptor('imagem'))
    async postMovie(@Body() dto: PostMovieInputDto, @UploadedFile() url_img: Express.Multer.File) {
        const imageBase64 = url_img.buffer.toString('base64');
        const movieData: PostMovieInputDto = {
            ...dto,
            url_img: imageBase64,
        };

        return await this.postMovieService.execute(movieData);
    }

    @Put()
    async deleteMovieById(@Query() dto: DeleteMoviesByIdInputDto, @Request() req) {
        
        const id_usuario = req.user.id;
        dto.id_usuario = id_usuario;

        return await this.deleteMovieByIdService.execute(dto);

    }

   


}