-- CreateTable
CREATE TABLE "Shoe" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "color" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "Shoe_pkey" PRIMARY KEY ("id")
);
