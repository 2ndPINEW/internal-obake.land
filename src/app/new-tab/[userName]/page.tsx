import styles from "./page.module.css";
import { Clock } from "../components/clock/clock";
import { Contributes } from "../components/contributes";

export const metadata = {
  title: "New Tab",
  description: "This is New Tab Override Page",
};

export default function NewTab({ params }: { params: { userName: string } }) {
  return (
    <div className={styles.wrapper}>
      <Clock></Clock>
      {/* @ts-expect-error Server Component */}
      <Contributes userName={params.userName}></Contributes>
    </div>
  );
}
