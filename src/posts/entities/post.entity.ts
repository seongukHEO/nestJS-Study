import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostModel {
  //이렇게 설정을 하면 자동으로 postSql 데이터에서 1씩 증가하는 고유한 값을 만들어준다
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
