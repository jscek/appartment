// import { Note } from "src/note/entities/note.entity";
import { ShoppingList } from "src/shopping-list/entities/shopping-list.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Flat {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    // flat  -* user
    @OneToMany(type => User, user => user.flat )
    users: User[];

    // flat  -* shoppinglist
    @OneToMany(type => ShoppingList, shoppingList => shoppingList.flat )
    shoppingList: ShoppingList[];

}