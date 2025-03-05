import {
  Controller,
  Get,
  Param,
  Query,
  Req,
  Post,
  Res,
  HttpCode,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('usersId')
  getUsers(): string {
    return this.userService.getUsers();
  }
  // Params
  @Get(':id')
  getAllUsers(@Param('id') params: string): string {
    console.log(params);
    return this.userService.getUsers();
  }
  @Get('device/:id')
  getAllUsersDevice(@Req() req: Request) {
    console.log(req.params);
    return this.userService.getUsers();
  }

  @Get('/devices/:id')
  getUsersDevice(@Param('id') id: string) {
    console.log(id);
    return this.userService.getUsers();
  }

  // Query
  @Get(':userId')
  getAllUsersQuery(@Req() req: Request) {
    console.log(req.query);
    return this.userService.getUsers();
  }

  // Query and @unnotation
  @Get('usersId/:QueryUnId')
  getAllUsersQueryUnnotation(@Req() req: Request, @Query() query) {
    console.log(query);
    return this.userService.getUsers();
  }
  @Get('usersIds/:deviceID')
  getDevice(
    @Param('deviceId') id: string,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    console.log(page);
    console.log(limit);
    return this.userService.getUsers();
  }

  // POST
  @HttpCode(201)
  @Post()
  createUser(@Res() res: Response) {
    const result = this.userService.CreateUser();
    return res.json(result);
  }

  @HttpCode(201)
  @Post('device')
  createDevice(@Req() req: Request, @Res() res: Response , @Body()body) {
    console.log(body);
    const result = this.userService.CreateDevice();
    return res.json(body);
  }
}
