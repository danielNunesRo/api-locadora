import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNumber, IsString } from "class-validator"


export class PostRentalOutputDto {
    
    @IsNumber()
    @Type(() => Number)
    id: number
    @IsString()
    nome: string
    @IsNumber()
    @Type(() => Number)
    id_category: number
    @IsNumber()
    @Type(() => Number)
    disponible: number
}