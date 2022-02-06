/*
  Warnings:

  - Added the required column `privilege` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserPrivilege" AS ENUM ('SUPERADMIN', 'MANAGER', 'SUPERVISOR', 'STAFF', 'NORMAL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "privilege" "UserPrivilege" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
