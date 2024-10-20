import { BadRequestException, Injectable } from "@nestjs/common";
import { GetMoviesRepository } from "../repositories/getMovies.repository";
import { GetMoviesOutputDto } from "../dto/getMoviesOutput.dto";

@Injectable()
export class GetMoviesService {

    constructor(private readonly repository: GetMoviesRepository) {}

    async execute(): Promise<GetMoviesOutputDto[]> {

        try {
            return await this.repository.getMovies();        
        } catch (error) {
            throw new BadRequestException('Houve um problema ao trazer a lista de filmes. Tente novamente!');
        }

    }

}