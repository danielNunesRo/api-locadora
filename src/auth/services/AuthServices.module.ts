import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service'; 
import { DatabaseModule } from 'src/database/database.module';
import { AuthRepository } from './authService.repositores';
import { AuthController } from '../controllers/auth.controller';

@Module({
    imports: [
        DatabaseModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY, 
            signOptions: { expiresIn: '60m' }, 
        }),
    ],
    controllers: [AuthController], 
    providers: [AuthService, AuthRepository], 
})
export class AuthServicesModule {}
