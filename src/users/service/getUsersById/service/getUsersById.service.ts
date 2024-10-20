import { Injectable } from "@nestjs/common";
import { GetUsersByIdRepository } from "../repositories/getUserById.repository";
import { GetUsersByIdDtoInput } from "../dto/getUsersByIdInput.dto";

@Injectable()
export class GetUsersByIdService {

    constructor(private readonly repository: GetUsersByIdRepository) {}

    async execute(dto: GetUsersByIdDtoInput) {
        return await this.repository.getUserById(dto.id);
    }

}