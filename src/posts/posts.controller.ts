import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

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

//자동으로 생성된다
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

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
