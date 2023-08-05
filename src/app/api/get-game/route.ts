import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import { sleep } from "@/helpers/common";

// const prisma = new PrismaClient();

// async function getPlayer() {
//   const player = await prisma.player.findMany();
//   return player;
// }

// export default async function handle(req, res) {
//   const posts = await prisma.post.findMany()
//   res.json(posts)
// }

export async function GET(request: Request) {
  console.log("v GET");
  //   const prisma = new PrismaClient();
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // });
  // const data = await res.json();
  // return NextResponse.json({ data })

  await sleep(2000);
  //   const data = await prisma.star.findMany({
  //     include: { position: true },
  //   });

  const data = ["zaba", "jez", "pouz"];

  // res.json(posts);
  console.log({ data });
  return NextResponse.json({ data });
}
