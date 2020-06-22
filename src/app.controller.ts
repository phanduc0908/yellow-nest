import { Controller, Get, Post, HttpCode, Res, Redirect, Param, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express'

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getall')
  getAllUser(@Res() res: Response): any {
    return res.status(HttpStatus.OK).json({
      status_code: HttpStatus.OK,
      data: 'Phan Van Duc'
    });
  }

  @Post()
  insertData(): any {
    return this.appService.getHello();
  }
}
