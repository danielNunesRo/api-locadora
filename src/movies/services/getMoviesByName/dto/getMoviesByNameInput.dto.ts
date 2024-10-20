import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetMoviesByNameInputDto {
    @ApiProperty({description: 'Nome do filme', example: 'The Dark Knight'})
    @IsString()
    nome: string
}