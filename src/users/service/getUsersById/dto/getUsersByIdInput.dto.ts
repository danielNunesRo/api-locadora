import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";


export class GetUsersByIdDtoInput {

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    id: number
}