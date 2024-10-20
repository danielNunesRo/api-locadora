import { Module } from '@nestjs/common';
import { RentalsServiceModule } from './services/rentalsService.module';

@Module({
    imports: [RentalsServiceModule],
    exports: [RentalsServiceModule]
})
export class RentalsModule {}
