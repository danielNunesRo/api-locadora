import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNumber, IsString } from "class-validator"

export class GetMoviesOutputDto {
    @ApiProperty({description: '(PK) codigo do filme', example: 1})
    @IsNumber()
    @Type(() => Number)
    id: number
    
    @ApiProperty({description: 'Nome do filme', example: 'The Dark Night'})
    @IsString()
    nome: string
    
    @ApiProperty({description: 'codigo referente ao id da categoria do filme', example: 2})
    @IsNumber()
    @Type(() => Number)
    id_category: number
    
    @ApiProperty({description: 'Valor boolean, 1 disponivel, 0 alugado', example: 1})
    @IsNumber()
    @Type(() => Number)
    disponible: number
    
    @ApiProperty({description: 'Nome da categoria do filme', example: 4})
    @IsString()
    category_name: string
}