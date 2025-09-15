/*
  Warnings:

  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Document";

-- CreateTable
CREATE TABLE "public"."Documento" (
    "id" SERIAL NOT NULL,
    "documento" TEXT NOT NULL,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemExpositivo" (
    "id" SERIAL NOT NULL,
    "tiutuloDaObra" TEXT NOT NULL,
    "descricao" TEXT,
    "autorId" INTEGER,
    "taxonomiaPaiId" INTEGER,
    "taxonomiaFilhoId" INTEGER,
    "periodo" TEXT,
    "altura" DECIMAL(65,30),
    "largura" DECIMAL(65,30),
    "comprimento" DECIMAL(65,30),
    "imagem_expositiva" TEXT,
    "documentoId" INTEGER,
    "status" INTEGER,
    "estadoConservacao" INTEGER,
    "emManutencao" BOOLEAN,

    CONSTRAINT "ItemExpositivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "public"."Autor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_taxonomiaPaiId_fkey" FOREIGN KEY ("taxonomiaPaiId") REFERENCES "public"."TaxonomiaPai"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_taxonomiaFilhoId_fkey" FOREIGN KEY ("taxonomiaFilhoId") REFERENCES "public"."TaxonomiaFilho"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "public"."Documento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
