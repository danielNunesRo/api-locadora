import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNumber } from "class-validator"


export class PostRentalInputDto {
    
    @ApiProperty({description: 'Codigo do usuario'})
    @IsNumber()
    id_users: number
    
    @ApiProperty({description: 'Codigo do filme'})
    @IsNumber()
    id_movie: number
    
    @ApiProperty({description: 'Data de Devolução do Filme', example:  "2024-10-30"})
    @IsDate()
    data_devolucao_rentals: Date

  

}