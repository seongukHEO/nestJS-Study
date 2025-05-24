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

// export interface PostModel {
//   uid: number;
//   author: string;
//   title: string;
//   content: string;
//   likeCount: number;
//   commentCount: number;
// }

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

  async getAllPosts() {
    return this.postsRepository.find();
  }

  async getPostByUid(uid: number) {
    const post = await this.postsRepository.findOne({
      where: {
        uid,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  async createPost(author: string, title: string, content: string) {
    // 1, create -> 저장할 객체를 생성한다
    // 2, save -> 객체를 저장한다. (create 메서드에서 생성한 객체로 저장한다)

    //여기 post는 uid가 없다 왜냐면 DB에서 올려주기 때문
    const post = this.postsRepository.create({
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    });

    //여기 newPost에는 uid가 존재한다
    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async putPost(
    uid: number,
    author?: string,
    title?: string,
    content?: string,
  ) {
    //save의 기능
    // 1, 만약 데이터가 존재하지 않는다면 (uid 기준) 새로 생성한다
    // 2, 만약 데이터가 존재한다면 존재하던 값을 업데이트 한다

    const post = await this.postsRepository.findOne({
      where: {
        uid: uid,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    if (author) {
      post.author = author;
    }

    if (content) {
      post.content = content;
    }

    if (title) {
      post.title = title;
    }

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  //오 인강 안보고 성공ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  async deletePost(uid: number) {
    const post = await this.postsRepository.findOne({
      where: {
        uid: uid,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    const newPost = await this.postsRepository.delete(post);

    return newPost;
  }
}
