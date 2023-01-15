/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Example` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Example` table. All the data in the column will be lost.
  - Added the required column `stockCount` to the `Example` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Example" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "stockCount" INTEGER NOT NULL;
