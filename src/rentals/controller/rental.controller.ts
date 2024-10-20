import { Body, Controller, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { PostRentalService } from "../services/postRental/service/postRental.service";
import { PostRentalInputDto } from "../services/postRental/dto/postRentalInput.dto";

@ApiTags('rentals')
@Controller('rentals')
export class RentalController {

    constructor(private readonly postRentalService: PostRentalService) {}

    @Post()
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    @ApiBadRequestResponse()
    async postRental(@Body() dto: PostRentalInputDto) {
        await this.postRentalService.execute(dto);
    }

}