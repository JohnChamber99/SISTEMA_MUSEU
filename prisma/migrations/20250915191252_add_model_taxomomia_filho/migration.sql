-- CreateTable
CREATE TABLE "public"."TaxonomiaFilho" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "taxonomiaPaiId" INTEGER NOT NULL,

    CONSTRAINT "TaxonomiaFilho_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."TaxonomiaFilho" ADD CONSTRAINT "TaxonomiaFilho_taxonomiaPaiId_fkey" FOREIGN KEY ("taxonomiaPaiId") REFERENCES "public"."TaxonomiaPai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
