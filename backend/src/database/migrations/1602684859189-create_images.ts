import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602684859189 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
           name: 'images',
           columns: [
            {
              // o name da coluna vai ser id
              name: 'id',
              // tipo inteiro
              type: 'integer',
              // coluna nao pode ser negativa
              unsigned: true,
              // chave primaria
              isPrimary: true,
              // coluna vai gerar automaticamente
              isGenerated: true,
              // vai gerar automaticamente incremental
              generationStrategy: 'increment',
            },
            {
              name: 'path',
              type: 'varchar',
            },
            {
              name: 'orphanage_id',
              type: 'integer',
            }
           ],
           foreignKeys: [
             {
               name: 'ImageOrphanages',
               columnNames: ['orphanage_id'],
               referencedTableName:'orphanages',
               referencedColumnNames: ['id'],
               onUpdate: 'CASCADE',
               onDelete: 'CASCADE',
             }
           ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images');

    }

}
