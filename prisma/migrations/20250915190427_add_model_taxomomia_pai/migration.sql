-- CreateTable
CREATE TABLE "public"."Document" (
    "id" SERIAL NOT NULL,
    "document" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TaxonomiaPai" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "TaxonomiaPai_pkey" PRIMARY KEY ("id")
);
