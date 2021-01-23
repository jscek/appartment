import { User } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingList } from './shopping-list.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bought: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  // item *- user
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  // @Column({ type: 'int', nullable: false })
  // user_id: number;

  // @Column({ type: 'int', nullable: false })
  // user_id: number;

  // item *- shoppngLIst
  @ManyToOne(() => ShoppingList, (shoppingList) => shoppingList.items, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'shoppingList_id' })
  shoppingList: ShoppingList;
}
