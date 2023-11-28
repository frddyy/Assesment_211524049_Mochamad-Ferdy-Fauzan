/*
  Warnings:

  - The primary key for the `BarangNota` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "BarangNota" DROP CONSTRAINT "BarangNota_pkey",
ADD COLUMN     "KodeBarangNota" SERIAL NOT NULL,
ADD CONSTRAINT "BarangNota_pkey" PRIMARY KEY ("KodeBarangNota");
