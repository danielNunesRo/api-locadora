import { BadRequestException, Injectable } from "@nestjs/common";
import { DeleteMoviesByIdInputDto } from "../dto/deleteMoviesByIdInput.dto";
import { DeleteMovieByIdRepository } from "../repositories/deleteMovieById.repository";

@Injectable()
export class DeleteMovieByIdService {

    constructor(private readonly repository: DeleteMovieByIdRepository) {}

    async execute (dto: DeleteMoviesByIdInputDto) {

        const existingMovie = await this.repository.findMovieById(dto.id_movie);

        if(existingMovie == undefined) {
            throw new BadRequestException('O filme não está cadastrado no sistema');
        }

        const filmDeleted = await this.repository.findMovieDeleted(dto.id_movie);
        
        if(filmDeleted) {
            throw new BadRequestException(`O filme já foi excluido do sistema`);
        }

        await this.repository.deleteMovieById(dto);

    }

}