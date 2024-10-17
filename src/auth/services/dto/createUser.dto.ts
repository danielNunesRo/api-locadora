import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioInputDto {

    @ApiProperty({description: 'Username do usuario a ser cadastrado', example: 'xuxudoblues'})
    @IsString()
    @IsNotEmpty()
    nome: string;
    
    @ApiProperty({description: 'Email do Usuario', example: 'xuxudoblues@gmail.com'})
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty({description: 'Senha do usuario'})
    @IsString()
    @IsNotEmpty()
    senha: string;


}

