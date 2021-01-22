import { Flat } from "src/flat/entities/flat.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Category } from "./category.entity";


@Entity()
export class ShoppingList {

    @PrimaryGeneratedColumn()
    id: number;

    // shoppinglist *- flat
    @ManyToOne(type => Flat, )
    @JoinColumn ({name: 'flat_id'})
    flat: Flat

    @Column({ type: "int", nullable: false })
    flat_Id: number;

    // shopingList  -* category
    @OneToMany(type => Category, (category) => category.shoppingList )
    categories: Category[];

    // @OneToMany(() => Category, (shopListCat) => shopListCat.shoppingList )
    // note_board: Category;
    
}
