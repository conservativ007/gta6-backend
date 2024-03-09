-- CreateTable
CREATE TABLE "wait_list" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "wait_list_pkey" PRIMARY KEY ("id")
);
