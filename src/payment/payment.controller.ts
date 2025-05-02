import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { IGooglePayDto } from '../dto/payDto.dto'

@Controller('payment')
export class PaymentController {
    constructor (private readonly paymentService: PaymentService ){}
    private responseTransaction: IGooglePayDto= {
            "token": "sample-token-from-google-pay",
            "amount": 49.99,
            "currency": "USD"
    }
    @Post('google-pay')
    processGooglePay(@Body() googlePayDto: IGooglePayDto) {
      return this.paymentService.processGooglePay(this.responseTransaction);
    }

}
