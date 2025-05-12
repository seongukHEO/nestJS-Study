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

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
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
