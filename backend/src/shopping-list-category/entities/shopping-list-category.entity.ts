import { IsString } from "class-validator";
import { ShoppingList } from "src/shopping-list/entities/shopping-list.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShoppingListCategory {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String;

    // shopListCat *- shopList
    @ManyToOne(type => ShoppingList, )
    @JoinColumn ({name: 'list_Id'})
    shoppingList: ShoppingList

    @Column({ type: "int", nullable: false })
    list_Id: number;


}
