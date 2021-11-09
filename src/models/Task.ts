import { Entity,Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity("tasks")
export class Task {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}