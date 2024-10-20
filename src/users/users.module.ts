import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UsersModuleService } from './service/usersService.module';

@Module({
    imports: [UsersModuleService],
    exports: [UsersModuleService]
})
export class UsersModule {}
