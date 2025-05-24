import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostModel } from './entities/post.entity';

/**
 * author : String
 * title : String
 * content : String
 * likeCount : number
 * commentCount : number
 */

export interface PostModel {
  uid: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

// eslint-disable-next-line prefer-const
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

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostModel)
    private readonly postsRepository: Repository<PostModel>,
  ) {}

  getAllPosts() {
    return posts;
  }

  getPostByUid(uid: number) {
    const post = posts.find((post) => post.uid === +uid);

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  createPost(author: string, title: string, content: string) {
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

  putPost(uid: number, author: string, title: string, content: string) {
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

  deletePost(uid: number) {
    const post = posts.find((post) => post.uid === +uid);

    if (!post) {
      throw new NotFoundException();
    }

    posts = posts.filter((post) => post.uid !== +uid);

    return posts;
  }
}
