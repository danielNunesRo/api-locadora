import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service'; 
import { DatabaseModule } from 'src/database/database.module';
import { AuthRepository } from './authService.repositores';
import { AuthController } from '../controllers/auth.controller';
import { JwtStrategy } from './strategyJwt'; 
import { JwtAuthGuard } from './JwtAuthGuard';
import { ConfigModule, ConfigService } from '@nestjs/config'; 

@Module({
    imports: [
        DatabaseModule,
        ConfigModule, 
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('SECRET_KEY'), 
                signOptions: { expiresIn: '60m' }, 
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AuthController], 
    providers: [
        AuthService, 
        AuthRepository, 
        JwtStrategy, 
        JwtAuthGuard, 
       
    ],
    exports: [AuthService], 
})
export class AuthServicesModule {}
