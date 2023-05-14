"use client";

import { useState } from "react";
import { ThemeModal } from "../theme-modal";
import styles from "./open-button.module.css";
import { CgMenuGridR } from "react-icons/cg";

export const OpenButton = ({ userName }: { userName: string }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <ThemeModal
        isOpen={isOpenModal}
        close={() => setIsOpenModal(false)}
        userName={userName}
      />
      <button
        onClick={() => setIsOpenModal(true)}
        className={styles.openModalButton}
      >
        <CgMenuGridR fontSize={30} color="rgb(104, 100, 100)" />
      </button>
    </div>
  );
};
