import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1636454828585 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'Nome',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'CPF',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'codigo_agente',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
