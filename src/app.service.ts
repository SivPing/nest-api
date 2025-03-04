import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Home Page!';
  }

  getGreeting(): string {
    return 'Hello from AppService!';
  }
}
