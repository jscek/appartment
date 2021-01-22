import { User } from '../../user/entities/user.entity';
import { Category } from '../../items/entities/category.entity'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    bought: boolean;

    @CreateDateColumn()
    created_at: Date;

    // item *- user
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'int', nullable: false })
    user_id: number;

    // item *- category
    @ManyToOne(() => Category, (category) => category.items)
    @JoinColumn({ name: 'category_id' })
    category: Category;

}
