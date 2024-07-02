/*
  Warnings:

  - You are about to drop the column `customerId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `Review` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `customerEmail` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_customerId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "customerId",
ADD COLUMN     "customerEmail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "customerId",
ADD COLUMN     "customerEmail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("email");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_customerEmail_fkey" FOREIGN KEY ("customerEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_customerEmail_fkey" FOREIGN KEY ("customerEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
