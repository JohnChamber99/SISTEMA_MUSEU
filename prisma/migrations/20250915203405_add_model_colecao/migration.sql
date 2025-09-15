/*
  Warnings:

  - Added the required column `colecaoItemId` to the `ItemExpositivo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ItemExpositivo" ADD COLUMN     "colecaoItemId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."ColecaoItem" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "ColecaoItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_colecaoItemId_fkey" FOREIGN KEY ("colecaoItemId") REFERENCES "public"."ColecaoItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
