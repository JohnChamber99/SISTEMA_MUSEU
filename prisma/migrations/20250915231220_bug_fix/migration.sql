/*
  Warnings:

  - You are about to drop the column `dataFaleecimento` on the `Autor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Autor" DROP COLUMN "dataFaleecimento",
ADD COLUMN     "dataFalecimento" TIMESTAMP(3);
