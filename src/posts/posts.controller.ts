import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author : String
 * title : String
 * content : String
 * likeCount : number
 * commentCount : number
 */

interface PostModel {
  uid: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    uid: 1,
    author: '허성욱',
    title: 'ㅎ호호호',
    content: '허성욱은 바보',
    likeCount: 1000,
    commentCount: 1000,
  },
  {
    uid: 2,
    author: '허성욱우우우',
    title: 'ㅎ호호ㅇㅇㅇㅇ호',
    content: '허성욱ㅇㅇㅇ은 바보',
    likeCount: 1000,
    commentCount: 1000,
  },
  {
    uid: 3,
    author: '허성욱메롱',
    title: 'ㅎ호호호우우우',
    content: '허성욱은 어어어',
    likeCount: 1000,
    commentCount: 1000,
  },
  {
    uid: 4,
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
  @Get(':uid')
  getPostById(@Param('uid') uid: string) {
    const post = posts.find((post) => post.uid === +uid);

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  //POST / posts
  //  Post를 생성한다
  @Post()
  postPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    const post = {
      uid: posts[posts.length - 1].uid + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];

    return post;
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
    const currentPost = posts.find((post) => post.uid === +uid);

    if (!currentPost) {
      throw new NotFoundException();
    }

    if (author) {
      currentPost.author = author;
    }

    if (title) {
      currentPost.title = title;
    }

    if (content) {
      currentPost.content = content;
    }

    posts = posts.map((prevPost) =>
      prevPost.uid === +uid ? currentPost : prevPost,
    );

    return currentPost;
  }

  //DELETE /posts/:id
  //  id에 해당하는 post를 삭제한다
  @Delete(':uid')
  deletPost(@Param('uid') uid: string) {
    const post = posts.find((post) => post.uid === +uid);

    if (!post) {
      throw new NotFoundException();
    }

    posts = posts.filter((post) => post.uid !== +uid);

    return posts;
  }
}
