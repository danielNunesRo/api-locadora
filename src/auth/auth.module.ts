import { Module } from '@nestjs/common';
import { AuthServicesModule } from './services/AuthServices.module';

@Module({
    imports: [AuthServicesModule],
    exports: [AuthServicesModule]
})
export class AuthModule {}
