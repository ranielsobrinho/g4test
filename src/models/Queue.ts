import internal = require("assert");
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("queue")
export class Queue {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column()
    timeout: number
}
