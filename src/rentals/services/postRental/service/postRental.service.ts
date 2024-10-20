import { BadRequestException, Injectable } from "@nestjs/common";
import { PostRentalRepository } from "../repositories/postRental.repository";
import { PostRentalInputDto } from "../dto/postRentalInput.dto";

@Injectable()
export class PostRentalService {

    constructor(private readonly repository: PostRentalRepository) {}

    async execute(dto: PostRentalInputDto) {
        try{
            const response = await this.repository.findMovie(dto.id_movie);

            if(!response) {
                throw new BadRequestException('Esse filme não está cadastrado no sistema');
            }
            
            if(response.disponible == 0) {
                throw new BadRequestException('O filme já está alugado');
            }

            await this.repository.postRental(dto);
            await this.repository.updateMovie(dto.id_movie);
        } catch(error) {
            throw new BadRequestException('Não foi possível efetuar o aluguel do filme, Tente novamente!');
        } 

    }

}