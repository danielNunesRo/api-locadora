import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { DatabaseService } from "src/database/database.service";
import { UserController } from "../controllers/user.controller";
import { GetUsersByIdService } from "./getUsersById/service/getUsersById.service";
import { GetUsersByIdRepository } from "./getUsersById/repositories/getUserById.repository";

@Module({
    imports:[DatabaseModule],
    providers: [GetUsersByIdService, GetUsersByIdRepository],
    exports: [],
    controllers: [UserController]
})

export class UsersModuleService {}