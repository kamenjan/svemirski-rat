"use client";

import { Fragment, useState } from "react";
import useSWR from "swr";

import Debug from "@/components/Debug";

// import Link from "next/link";

// TODO: seed should be api route
// import { seed } from "@/utils/db";
// import { sleep } from "@/helpers/common";

// import { GET } from "./api/get-game/route";
// import { GET } from "./api/route";

const fetcher = async (url: string) => {
  // try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

// @ts-ignore
// const fetcher = (url) => fetch(url).then((res) => res.json());

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Counter() {
  const [count, setCount] = useState(0);
  const { data, error } = useSWR("/api", fetcher);

  // if (error) return <Debug value={error} />;
  // if (!data) return <div>Loading...</div>;

  return (
    <div>
      {error ? (
        <pre>{JSON.stringify(error, null, 2)}</pre>
      ) : (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          <Debug value={data} />
        </div>
      )}
    </div>
  );
}
