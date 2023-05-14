import styles from "./page.module.css";
import { Clock } from "../components/clock/clock";
import { Contributes } from "../components/contributes";
import { DynamicBackground } from "../components/dynamic-background";
import { OpenButton } from "../components/theme-modal/button/open-button";
import { fetchTheme } from "@/app/actions/theme-modal";
import { ThemeType } from "@/module/theme";

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
  console.log(theme);

  return (
    <div className={styles.wrapper}>
      <DynamicBackground theme={theme}></DynamicBackground>
      <Clock></Clock>
      {/* @ts-expect-error Server Component */}
      <Contributes userName={params.userName}></Contributes>

      <div className={styles.openModalButton}>
        <OpenButton userName={params.userName} />
      </div>
    </div>
  );
}
