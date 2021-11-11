import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateForeignKeys1636599460250 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('queue', new TableColumn({
            name: 'userId',
            type: 'int',
            isNullable: false
        }))

        await queryRunner.createForeignKey('queue', new TableForeignKey({
            name: 'user_id_fk',
            columnNames: ['userId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('queue', 'user_id_fk')
        await queryRunner.dropColumn('queue','userId')
    }

}
