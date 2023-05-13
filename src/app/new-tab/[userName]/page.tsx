import styles from "./page.module.css";
import { Clock } from "../components/clock/clock";
import { Contributes } from "../components/contributes";
import { DynamicBackground } from "../components/dynamic-background";

export const metadata = {
  title: "New Tab",
  description: "This is New Tab Override Page",
};

export const revalidate = 3600;

export default function NewTab({ params }: { params: { userName: string } }) {
  return (
    <div className={styles.wrapper}>
      <DynamicBackground></DynamicBackground>
      <Clock></Clock>
      {/* @ts-expect-error Server Component */}
      <Contributes userName={params.userName}></Contributes>
    </div>
  );
}
