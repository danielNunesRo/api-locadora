import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  // Adicione isso
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtStrategy } from './auth/services/strategyJwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    DatabaseModule, 
    AuthModule, 
    UsersModule, 
    PassportModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
