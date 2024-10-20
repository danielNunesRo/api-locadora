import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  // Adicione isso
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtStrategy } from './auth/services/strategyJwt';
import { PassportModule } from '@nestjs/passport';
import { MoviesModule } from './movies/movies.module';
import { RentalsModule } from './rentals/rentals.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    DatabaseModule, 
    AuthModule, 
    UsersModule, 
    PassportModule, MoviesModule, RentalsModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
