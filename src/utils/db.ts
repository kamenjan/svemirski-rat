import { Prisma, PrismaClient } from "@prisma/client";
import { Player, Coordinates, Planet, StarCluster, Star } from "@prisma/client";
// const util = require("util");
// const { PrismaClient } = require("@prisma/client");

export async function seed() {
  const prisma = new PrismaClient();

  const universeSize = 10000;
  const galaxiesCount = getRandomInt(4, 6);

  // Default user
  const user = await prisma.player.create({
    data: { name: "Kapetan Macek Muri" },
  });

  for (let i = 0; i < galaxiesCount; i++) {
    const radius = getRandomInt(800, 1200);
    const center = getRandomPoint(universeSize / 2, 5000, 5000);
    const starsCount = getRandomInt(8, 12);

    // TODO: Check if galaxy doesn't overlap with existing ones
    // let overlapsExisting = false;
    // for (const existingGalaxy of galaxies) {
    //   const distance = getDistance(center, existingGalaxy.center);
    //   if (distance < radius + existingGalaxy.radius) {
    //     overlapsExisting = true;
    //     break;
    //   }
    // }

    // if (overlapsExisting) doSomeShoit

    const coordinates = await prisma.coordinates.create({
      data: center,
    });

    const cluster = await prisma.starCluster.create({
      data: {
        name: generateName(),
        coordinatesId: coordinates.id,
      },
    });

    for (let j = 0; j < starsCount; j++) {
      const starLocation = getRandomPoint(radius, center.x, center.y);
      const planetsCount = getRandomInt(3, 9);
      const coordinates = await prisma.coordinates.create({
        data: starLocation,
      });

      const star = await prisma.star.create({
        data: {
          name: generateName(),
          coordinatesId: coordinates.id,
          starClusterId: cluster.id,
        },
      });

      for (let k = 0; k < planetsCount; k++) {
        const planetLocation = getRandomPoint(
          100,
          starLocation.x,
          starLocation.y
        );

        const coordinates = await prisma.coordinates.create({
          data: planetLocation,
        });

        const planet = await prisma.planet.create({
          data: {
            name: generateName(),
            coordinatesId: coordinates.id,
            starId: star.id,
          },
        });
      }
    }
  }
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomPoint(
  radius: number,
  centerX: number = 0,
  centerY: number = 0
): { x: number; y: number } {
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.sqrt(Math.random()) * radius;
  const x = Math.floor(centerX + Math.cos(angle) * distance);
  const y = Math.floor(centerY + Math.sin(angle) * distance);
  // const x = Math.abs(Math.floor(centerX + Math.cos(angle) * distance));
  // const y = Math.abs(Math.floor(centerY + Math.sin(angle) * distance));
  return { x, y };
}

function getDistance(point1: Coordinates, point2: Coordinates): number {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function generateName(): string {
  // Generate a random name using some simple rules
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";
  const nameLength = getRandomInt(4, 8);

  let name = "";
  for (let i = 0; i < nameLength; i++) {
    name +=
      i % 2 == 0
        ? consonants.charAt(getRandomInt(0, consonants.length - 1))
        : vowels.charAt(getRandomInt(0, vowels.length - 1));
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
}

// seed();
