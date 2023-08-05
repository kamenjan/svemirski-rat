"use client";

export default function Debug(value: any) {
  const debug = JSON.stringify(value, null, 2);
  return <pre>{debug}</pre>;
}
