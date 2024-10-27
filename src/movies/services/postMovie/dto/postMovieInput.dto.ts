import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class PostMovieInputDto {
    @ApiProperty({description: 'Nome do filme', example: 'Joker 2'})
    @IsString()
    nome: string;

    @ApiProperty({description: 'Categoria do filme', example: 2})
    @IsNumber()
    id_category: number;

    @ApiProperty({description: 'imagem do filme'})
    @IsString()
    url_img: string;

}