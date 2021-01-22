import { Flat } from '../../flats/entities/flat.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  // shoppinglist *- flat
  @ManyToOne(() => Flat)
  @JoinColumn({ name: 'flat_id' })
  flat: Flat;

  @Column({ type: 'int', nullable: false })
  flat_id: number;

  // shoppinList -* item
  @OneToMany(() => Item, (item) => item.shoppingList)
  items: Item[];
}
