import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'All Users';
  }
  CreateUser():string { 
    return 'Create User 1';
  };

  CreateDevice():string { 
    return 'Create Device 1';
  };
}
