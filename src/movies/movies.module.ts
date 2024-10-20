import { Module } from '@nestjs/common';
import { moviesServiceModule } from './services/moviesService.module';

@Module({
    imports:[moviesServiceModule],
    exports: [moviesServiceModule],
})
export class MoviesModule {}
