import styles from "./page.module.css";
import { Clock } from "../components/clock/clock";
import { Contributes } from "../components/contributes";

export default function NewTab({ params }: { params: { userName: string } }) {
  return (
    <div className={styles.wrapper}>
      <Clock></Clock>
      {/* @ts-expect-error Server Component */}
      <Contributes userName={params.userName}></Contributes>
    </div>
  );
}
