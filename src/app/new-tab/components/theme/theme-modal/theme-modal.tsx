"use client";

import { ThemeType } from "@/module/theme";
import { ThemeLabelsList } from "../theme-labels-list/theme-labels-list";
import styles from "./theme-modal.module.css";
import { IoMdClose } from "react-icons/io";

type Props = {
  isOpen: boolean;
  close: () => void;
  userName: string;
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export const ThemeModal = ({
  isOpen,
  close,
  userName,
  currentTheme,
  setTheme,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.content}>
        <h2 className={styles.menuTitle}>Theme</h2>
        <ThemeLabelsList
          userName={userName}
          currentTheme={currentTheme}
          setTheme={setTheme}
          close={close}
        />

        <button
          type="button"
          className={styles.closeButton}
          onClick={() => close()}
        >
          <IoMdClose fontSize={30} color="rgb(104, 100, 100)" />
        </button>
      </div>
    </div>
  );
};
