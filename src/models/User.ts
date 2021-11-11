import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Queue } from "./Queue";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column()
    username: string

    @Column()
    CPF: string

    @Column()
    email: string

    @Column()
    codigo_agente: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

}
