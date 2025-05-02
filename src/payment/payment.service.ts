import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { IGooglePayDto } from 'src/dto/payDto.dto';

@Injectable()
export class PaymentService {
    constructor(private readonly paymentRepository: PaymentRepository){}

    processGooglePay(dto: IGooglePayDto) {
        // Simulación de validación del token
        if (!dto.token || dto.token.length < 10) {
          throw new Error('Invalid Google Pay token');
        }
    
        const paymentRecord = {
          method: 'GOOGLE_PAY',
          amount: dto.amount,
          currency: dto.currency,
          token: dto.token,
        };
        //this.paymentRepo.save(paymentRecord);
        return paymentRecord;
      }

}
