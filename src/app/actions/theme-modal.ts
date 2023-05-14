"use server";
import { kv } from "@vercel/kv";
import { ThemeType } from "@/module/theme";
import { revalidatePath } from "next/cache";

export const sendTheme = async (userId: string, theme: ThemeType) => {
  const res = await kv.set(`${userId ?? ""} - theme`, JSON.stringify(theme));
  revalidatePath(`/new-tab/${userId}`);
};

export const fetchTheme = async (userId: string) => {
  const theme = await kv.get(`${userId ?? ""} - theme`);
  revalidatePath(`/new-tab/${userId}`);
  return theme;
};

export const selectDefaultTheme = async (userId: string) => {
  const theme = await kv.srem(`${userId ?? ""} - theme`);
  revalidatePath(`/new-tab/${userId}`);
  return theme;
};
