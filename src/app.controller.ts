import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('test')
  getHello(@Body() body: any): string {
    console.log('BODY', body);
    return this.appService.getHello();
  }
}
