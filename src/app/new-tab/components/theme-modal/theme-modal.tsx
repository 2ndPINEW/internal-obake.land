"use client";

import styles from "./theme-modal.module.css";
import kv from "@vercel/kv";

export const ThemeModal = async () => {
  const hoge: string = (await kv.get("hoge")) ?? "not found";

  await new Promise((resolve) => resolve("hoge"));

  return (
    <div>
      <div>{hoge}</div>
    </div>
  );
};
