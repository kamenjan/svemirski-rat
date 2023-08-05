import { NextResponse } from "next/server";

import { sleep } from "@/helpers/common";

export async function GET() {
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   // @ts-ignore
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY,
  //   },
  // });
  // const data = await res.json();

  // return NextResponse.json({ data });
  // await sleep(3000);
  console.log("/api");
  // throw new Error("moj custom error za api response");
  return NextResponse.json({ response: "DAJ /ribu" });
}
