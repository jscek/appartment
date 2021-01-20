import { Note } from "src/note/entities/note.entity";
import { Flat } from "src/flat/entities/flat.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    avatar: String;

    // user -* note
    @OneToMany(type => Note, note => note.user )
    notes: Note[];

    // user *- flat
    @ManyToOne(type => Flat, )
    @JoinColumn ({name: 'flat_Id'})
    flat: Flat

    @Column({ type: "int", nullable: true })
    flat_Id: number;
}
 