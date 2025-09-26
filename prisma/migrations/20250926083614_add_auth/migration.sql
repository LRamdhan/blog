-- AlterTable
ALTER TABLE "public"."Account" ADD COLUMN     "refresh_token_expires_in" INTEGER;

-- CreateTable
CREATE TABLE "public"."Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
