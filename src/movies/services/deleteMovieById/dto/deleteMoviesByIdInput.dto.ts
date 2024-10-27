import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNumber } from "class-validator"

export class DeleteMoviesByIdInputDto {

    @ApiProperty({description: 'ID do ADM que irá excluir o filme do catalogo', example: 1})
    @IsNumber()
    @Type(() => Number)
    id_usuario: number
    @ApiProperty({description: 'ID do filme que será excluido do catalogo', example: 1})
    @IsNumber()
    @Type(() => Number)
    id_movie: number

}