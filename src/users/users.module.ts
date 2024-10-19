import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';

@Module({
    providers: [],
    controllers: [UserController]
})
export class UsersModule {}
