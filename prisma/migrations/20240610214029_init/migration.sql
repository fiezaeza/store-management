/*
  Warnings:

  - You are about to alter the column `price` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sum` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `orders` MODIFY `price` INTEGER NOT NULL,
    MODIFY `sum` INTEGER NOT NULL;
