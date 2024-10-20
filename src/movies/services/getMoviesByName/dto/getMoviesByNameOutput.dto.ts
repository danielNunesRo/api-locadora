import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNumber, IsString } from "class-validator"

export class GetMoviesByNameOutputDto {
    @ApiProperty({description: 'codigo do filme'})
    @IsNumber()
    @Type(() => Number)
    id: number
    
    @ApiProperty({description: 'nome do filme'})
    @IsString()
    nome: string
    
    @ApiProperty({description: 'disponibilidade'})
    @IsNumber()
    @Type(() => Number)
    disponible: number
    
    @ApiProperty({description: 'nome da categoria do filme'})
    @IsString()
    category_name: string
}



