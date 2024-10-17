import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports:[DatabaseService],
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule {}
