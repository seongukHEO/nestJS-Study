import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//만약 Controller에도 post를 넣어주고
//Get에도 post를 넣어준다면
// /post/post를 해야 값이 나온다
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
