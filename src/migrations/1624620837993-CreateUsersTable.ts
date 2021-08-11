import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUsersTable1624620837993 implements MigrationInterface {
    private tableName = 'users';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'bigserial',
                    isPrimary: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }
}
