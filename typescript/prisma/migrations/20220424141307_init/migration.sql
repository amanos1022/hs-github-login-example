/*
  Warnings:

  - You are about to drop the column `github_token` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `github_username` on the `User` table. All the data in the column will be lost.
  - Added the required column `githubToken` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubUsername` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "githubToken" TEXT NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "updatedAt") SELECT "createdAt", "email", "id", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
