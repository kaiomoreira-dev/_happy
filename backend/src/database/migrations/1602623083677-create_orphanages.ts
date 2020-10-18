import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602623083677 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar Altgerações
        //Criar uma tabela, criar um campo, deletar o campo

        await queryRunner.createTable(new Table ({
          name: 'orphanages',
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
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'latitude',
              type: 'decimal',
              scale: 10,
              precision: 2,
            },
            {
              name: 'longitude',
              type: 'decimal',
              scale: 10,
              precision: 2,
            },
            {
              name: 'about',
              type: 'text',
            },
            {
              name: 'whatsapp',
              type: 'text',
            },
            {
              name: 'instructions',
              type: 'text',
            },
            {
              name: 'opening_hours',
              type: 'varchar',
            },
            {
              name: 'open_on_weekends',
              type: 'boolean',
              default: false,
            },
          ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Desfazer o foi feito no UP
        await queryRunner.dropTable('orphanages');
    }

}
