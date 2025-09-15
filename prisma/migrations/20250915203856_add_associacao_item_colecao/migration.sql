/*
  Warnings:

  - You are about to drop the column `colecaoItemId` on the `ItemExpositivo` table. All the data in the column will be lost.
  - You are about to drop the `ColecaoItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ItemExpositivo" DROP CONSTRAINT "ItemExpositivo_colecaoItemId_fkey";

-- AlterTable
ALTER TABLE "public"."ItemExpositivo" DROP COLUMN "colecaoItemId";

-- DropTable
DROP TABLE "public"."ColecaoItem";

-- CreateTable
CREATE TABLE "public"."Colecao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Colecao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ColecaoToItemExpositivo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ColecaoToItemExpositivo_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ColecaoToItemExpositivo_B_index" ON "public"."_ColecaoToItemExpositivo"("B");

-- AddForeignKey
ALTER TABLE "public"."_ColecaoToItemExpositivo" ADD CONSTRAINT "_ColecaoToItemExpositivo_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Colecao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ColecaoToItemExpositivo" ADD CONSTRAINT "_ColecaoToItemExpositivo_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."ItemExpositivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
