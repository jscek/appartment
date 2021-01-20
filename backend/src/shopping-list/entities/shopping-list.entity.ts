import { Flat } from "src/flat/entities/flat.entity";
import { ShoppingListCategory } from "src/shopping-list-category/entities/shopping-list-category.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ShoppingList {

    @PrimaryGeneratedColumn()
    id: number;

    // shoppinglist *- flat
    @ManyToOne(type => Flat, )
    @JoinColumn ({name: 'flat_Id'})
    flat: Flat

    @Column({ type: "int", nullable: false })
    flat_Id: number;

    // shopList  -* shopListCat
    @OneToMany(type => ShoppingListCategory, shopListCat => shopListCat.shoppingList )
    shopListCats: ShoppingListCategory[];
    
}
