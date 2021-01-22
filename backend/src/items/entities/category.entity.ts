import { IsString } from "class-validator";
// import {  } from "src/shopping-list/entities/shopping-list.entity";
import { Item } from './item.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingList } from "./shopping-list.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: String;

    // category  -* item
    @OneToMany(() => Item, (item) => item.category)
    items: Item[];

    // category *- shoppingList
    @ManyToOne(type => ShoppingList, (shoppingList) => shoppingList.categories )
    @JoinColumn ({name: 'list_id'})
    shoppingList: ShoppingList

    // @Column({ type: "int", nullable: true })
    // list_Id: number;


}
