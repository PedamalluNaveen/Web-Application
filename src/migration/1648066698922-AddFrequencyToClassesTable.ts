import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFrequencyToClassesTable1648066698922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (!await queryRunner.hasColumn('classes', 'frequency')) {
            await queryRunner.query(`ALTER TABLE classes ADD frequency VARCHAR(45) NULL`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE classes DROP COLUMN frequency`);
    }

}
