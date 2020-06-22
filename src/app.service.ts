import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Duc';
  }

  getAllUser(): string {
    return 'Phan Van Duc';
  }
}
