import {Column, CreateDateColumn, Entity, Generated, PrimaryColumn} from "typeorm";

@Entity("users")
export class User {
    @Generated("increment")
    @Column()
    id: number

    @Column()
    nome: string

    @Column()
    username: string

    @PrimaryColumn()
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
