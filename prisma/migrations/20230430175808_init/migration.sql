-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "seen" BOOLEAN NOT NULL,
    "playerId" INTEGER,
    CONSTRAINT "Notification_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Coordinates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "MoveOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "coordinatesId" INTEGER NOT NULL,
    "startTime" DATETIME NOT NULL,
    "arrivalTime" DATETIME NOT NULL,
    CONSTRAINT "MoveOrder_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "range" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "coordinatesId" INTEGER,
    "moveOrderId" INTEGER,
    "playerId" INTEGER,
    CONSTRAINT "Unit_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Unit_moveOrderId_fkey" FOREIGN KEY ("moveOrderId") REFERENCES "MoveOrder" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Unit_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Planet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "coordinatesId" INTEGER NOT NULL,
    "starId" INTEGER NOT NULL,
    CONSTRAINT "Planet_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Planet_starId_fkey" FOREIGN KEY ("starId") REFERENCES "Star" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Star" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "coordinatesId" INTEGER NOT NULL,
    "starClusterId" INTEGER NOT NULL,
    CONSTRAINT "Star_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Star_starClusterId_fkey" FOREIGN KEY ("starClusterId") REFERENCES "StarCluster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StarCluster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "coordinatesId" INTEGER NOT NULL,
    CONSTRAINT "StarCluster_coordinatesId_fkey" FOREIGN KEY ("coordinatesId") REFERENCES "Coordinates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
