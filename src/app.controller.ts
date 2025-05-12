import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * author : String
 * title : String
 * content : String
 * likeCount : number
 * commentCount : number
 */

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

//만약 Controller에도 post를 넣어주고
//Get에도 post를 넣어준다면
// /post/post를 해야 값이 나온다
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('post')
  getPost(): Post {
    return {
      author: 'Founder',
      title: '안녕하세요 FOUNDER입니다',
      content: '원단 혁신은 FOUNDER에서',
      likeCount: 100000,
      commentCount: 999,
    };
  }
}
