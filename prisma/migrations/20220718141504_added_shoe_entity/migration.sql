-- CreateTable
CREATE TABLE "Dress" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "Dress_pkey" PRIMARY KEY ("id")
);
