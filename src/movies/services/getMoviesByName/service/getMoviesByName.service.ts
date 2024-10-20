import { BadRequestException, Injectable } from "@nestjs/common";
import { GetMoviesByNameRepository } from "../repositories/getMoviesByName.repository";
import { GetMoviesByNameOutputDto } from "../dto/getMoviesByNameOutput.dto";
import { GetMoviesByNameInputDto } from "../dto/getMoviesByNameInput.dto";

@Injectable()
export class getMoviesByNameService {

    constructor(private readonly repository:GetMoviesByNameRepository) {}

    async execute(dto: GetMoviesByNameInputDto): Promise<GetMoviesByNameOutputDto[]> {
        
        const response = await this.repository.GetMoviesByNameRepository(dto.nome);
        if(response.length < 1) {
            throw new BadRequestException('Nenhum filme foi encontrado com esse nome');
        }

        return response;
        
        
    }

}