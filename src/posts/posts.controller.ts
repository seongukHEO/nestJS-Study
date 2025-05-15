import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author : String
 * title : String
 * content : String
 * likeCount : number
 * commentCount : number
 */

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: '허성욱',
    title: 'ㅎ호호호',
    content: '허성욱은 바보',
    likeCount: 1000,
    commentCount: 1000,
  },
  {
    id: 2,
    author: '허성욱우우우',
    title: 'ㅎ호호ㅇㅇㅇㅇ호',
    content: '허성욱ㅇㅇㅇ은 바보',
    likeCount: 1000,
    commentCount: 1000,
  },
  {
    id: 3,
    author: '허성욱메롱',
    title: 'ㅎ호호호우우우',
    content: '허성욱은 어어어',
    likeCount: 1000,
    commentCount: 1000,
  },
];

//자동으로 생성된다
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //GET / posts
  //  모든 posts를 가져온다
  @Get()
  getPosts() {
    return posts;
  }

  //GET / posts/:id
  //  id에 해당하는 post를 가져온다

  //POST / posts
  //  Post를 생성한다

  //PUT /posts/:id
  //  id에 해단되는 post를 변경한다

  //DELETE /posts/:id
  //  id에 해당하는 post를 삭제한다
}
