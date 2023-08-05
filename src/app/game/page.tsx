import Ship from "@/components/ship";
import Sun from "@/components/sun";
import { PrismaClient } from "@prisma/client";
import { Fragment } from "react";

const prisma = new PrismaClient();

const getStarClusters = async () => await prisma.starCluster.findMany();

const getStars = async () =>
  await prisma.star.findMany({
    include: { position: true },
  });

const getPlanets = async () =>
  await prisma.planet.findMany({
    include: { position: true },
  });

const getCoordinates = async (id: number) =>
await prisma.coordinates.findUnique({ where: { id } });

export default async function Game() {
  const clusters = await getStarClusters();
  const stars = await getStars();
  const planets = await getPlanets();

  return (
    <Fragment>
      {stars.map((s) => (
        <Sun
          key={s.id.toString()}
          id={s.id.toString()}
          x={s.position.x}
          y={s.position.y}
        />
      ))}
      {planets.map((p) => {
        return (
          <Sun
            key={p.id.toString()}
            id={p.id.toString()}
            x={p.position.x}
            y={p.position.y}
          />
        );
      })}
    </Fragment>
  );
}
