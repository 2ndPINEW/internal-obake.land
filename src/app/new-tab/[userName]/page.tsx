import styles from "./page.module.css";
import { Clock } from "../components/clock/clock";
import { Contributes } from "../components/contributes";
import { fetchTheme } from "@/app/actions/theme-modal";
import { ThemeType } from "@/module/theme";
import { ThemeContainer } from "../components/theme/theme-container/theme-container";

export const metadata = {
  title: "New Tab",
  description: "This is New Tab Override Page",
};

export default async function NewTab({
  params,
}: {
  params: { userName: string };
}) {
  const theme = (await fetchTheme(params.userName)) as ThemeType;

  return (
    <div className={styles.wrapper}>
      <ThemeContainer theme={theme} userName={params.userName}></ThemeContainer>
      <Clock></Clock>
      {/* @ts-expect-error Server Component */}
      <Contributes userName={params.userName}></Contributes>
    </div>
  );
}
