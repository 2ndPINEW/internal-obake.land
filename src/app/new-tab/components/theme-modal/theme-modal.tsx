"use client";

import { ThemeLabelsList } from "./theme-labels-list/theme-labels-list";
import styles from "./theme-modal.module.css";
import { IoMdClose } from "react-icons/io";

export const ThemeModal = ({
  isOpen,
  close,
  userName,
}: {
  isOpen: boolean;
  close: () => void;
  userName: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.content}>
        <h2 className={styles.menuTitle}>Theme</h2>
        <ThemeLabelsList userName={userName} />

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
