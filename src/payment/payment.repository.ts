import { Injectable } from '@nestjs/common';
import { IGooglePayDto } from 'src/dto/payDto.dto';

@Injectable()
export class PaymentRepository {
    constructor( ){}//db instance
   //receive response of aplication(frontend)
    processOfGoogle(dto: IGooglePayDto){
        console.log(dto)
        return dto;
    }
}
