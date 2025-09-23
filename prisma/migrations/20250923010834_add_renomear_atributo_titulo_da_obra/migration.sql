-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Autor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "dataNascimento" TIMESTAMP(3),
    "dataFalecimento" TIMESTAMP(3),
    "estaVivo" BOOLEAN,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Documento" (
    "id" SERIAL NOT NULL,
    "documento" TEXT NOT NULL,

    CONSTRAINT "Documento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TaxonomiaPai" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "TaxonomiaPai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TaxonomiaFilho" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "taxonomiaPaiId" INTEGER NOT NULL,

    CONSTRAINT "TaxonomiaFilho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemExpositivo" (
    "id" SERIAL NOT NULL,
    "tituloDaObra" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- CreateIndex
CREATE INDEX "_ColecaoToItemExpositivo_B_index" ON "public"."_ColecaoToItemExpositivo"("B");

-- AddForeignKey
ALTER TABLE "public"."TaxonomiaFilho" ADD CONSTRAINT "TaxonomiaFilho_taxonomiaPaiId_fkey" FOREIGN KEY ("taxonomiaPaiId") REFERENCES "public"."TaxonomiaPai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "public"."Autor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_taxonomiaPaiId_fkey" FOREIGN KEY ("taxonomiaPaiId") REFERENCES "public"."TaxonomiaPai"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_taxonomiaFilhoId_fkey" FOREIGN KEY ("taxonomiaFilhoId") REFERENCES "public"."TaxonomiaFilho"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemExpositivo" ADD CONSTRAINT "ItemExpositivo_documentoId_fkey" FOREIGN KEY ("documentoId") REFERENCES "public"."Documento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ColecaoToItemExpositivo" ADD CONSTRAINT "_ColecaoToItemExpositivo_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Colecao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ColecaoToItemExpositivo" ADD CONSTRAINT "_ColecaoToItemExpositivo_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."ItemExpositivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
