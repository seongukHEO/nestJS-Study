import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

//자동으로 생성된다
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //GET / posts
  //  모든 posts를 가져온다
  @Get()
  getPosts() {
    return this.postsService.getAllPosts();
  }

  //GET / posts/:id
  //  id에 해당하는 post를 가져온다
  @Get(':uid')
  getPostById(@Param('uid') uid: string) {
    return this.postsService.getPostByUid(+uid);
  }

  //POST / posts
  //  Post를 생성한다
  @Post()
  postPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.postsService.createPost(author, title, content);
  }

  //PUT /posts/:id
  //  id에 해당되는 post를 변경한다
  @Put(':uid')
  putPost(
    @Param('uid') uid: string,
    @Body('author') author?: string,
    @Body('title') title?: string,
    @Body('content') content?: string,
  ) {
    return this.postsService.putPost(+uid, author!, title!, content!);
  }

  //DELETE /posts/:id
  //  id에 해당하는 post를 삭제한다
  @Delete(':uid')
  deletPost(@Param('uid') uid: string) {
    return this.postsService.deletePost(+uid);
  }
}
