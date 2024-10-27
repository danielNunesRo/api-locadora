import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PostMovieRepository } from "../repositories/postMovie.repository";
import { PostMovieInputDto } from "../dto/postMovieInput.dto";
import { Storage } from "@google-cloud/storage";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PostMovieService {

    private storage: Storage;
    private bucketName: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly repository: PostMovieRepository) {

            this.storage = new Storage({
                projectId: this.configService.get<string>('GOOGLE_CLOUD_PROJECT_ID'),
                keyFilename: this.configService.get<string>('GOOGLE_CLOUD_KEY_FILE'),
            });
            this.bucketName = this.configService.get<string>('GOOGLE_CLOUD_BUCKET_NAME');

        }

    async execute (dto: PostMovieInputDto) {
        try {
            const imageUrl = await this.uploadedImage(dto.url_img, dto.nome);
            dto.url_img = imageUrl
            const response = await this.repository.postMovie(dto);
            return response;
        } catch (error) {
            throw new InternalServerErrorException({
                description: 'Não foi possível salvar o filme no catálogo, tente novamente!',
                error: `${error}`
            });
        }
    }

    private async uploadedImage(imageBase64: string, nome:string): Promise<string> {
        try {
            const base64Data = imageBase64.replace(/^data:image\/jpeg;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            
            const nameMovie = nome
            .normalize("NFD")                          
            .replace(/[\u0300-\u036f]/g, "")          
            .replace(/\s+/g, "")                      
            .toLowerCase();      
            const fileName = `filmes/${nameMovie}.jpg`;
            
            const file = this.storage.bucket(this.bucketName).file(fileName);

            await file.save(buffer, {
                metadata: { contentType: 'image/jpeg' }
            });

            const publicURL = await file.publicUrl();
     
            return publicURL;

        } catch(error) {
            throw new InternalServerErrorException({
                description: 'Não foi possível enviar a imagem para o bucket',
                error: `${error}`
            });
        }   
    }


}