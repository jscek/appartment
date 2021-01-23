import { Flat } from '../../flats/entities/flat.entity';
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  // shoppinglist *- flat
  @ManyToOne(() => Flat)
  @JoinColumn({ name: 'flat_id' })
  flat: Flat;

  // shoppinList -* item
  @OneToMany(() => Item, (item) => item.shoppingList)
  items: Item[];
}
