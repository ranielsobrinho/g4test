import internal = require("assert");
import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity("queue")
export class Queue {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column()
    timeout: number

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

    @JoinColumn({
        name: 'userId'
    })
    @ManyToOne(() => User)
    userId: User
}
