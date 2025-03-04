import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Home Page!';
  }

  getTest(): string {
    return 'Home Page Test!';
  }
}
