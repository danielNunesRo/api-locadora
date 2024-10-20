import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { RentalController } from "../controller/rental.controller";
import { PostRentalService } from "./postRental/service/postRental.service";
import { PostRentalRepository } from "./postRental/repositories/postRental.repository";

@Module({
    imports: [DatabaseModule],
    providers: [PostRentalService, PostRentalRepository],
    controllers: [RentalController]
})


export class RentalsServiceModule {}