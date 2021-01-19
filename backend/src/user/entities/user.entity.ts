import { Note } from "src/note/entities/note.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @OneToMany(type => Note, note => note.user )
    notes: Note[];

}
