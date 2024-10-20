import { Injectable } from "@nestjs/common";
import { GetUsersByIdOutputDto } from "../dto/getUserByInputOutput.dto";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class GetUsersByIdRepository {
    
    constructor(private readonly db: DatabaseService) {}


    async getUserById(id: number) {
        
        const sql = `
            SELECT * FROM ALLUSERS 
            WHERE id = :id
        `

        const binds = {
            id: id
        }

        const response = await this.db.query(sql, binds);

        return response[0];


        
      
    }

}