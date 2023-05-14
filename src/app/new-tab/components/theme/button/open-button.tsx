"use client";

import { useState } from "react";
import { ThemeModal } from "../theme-modal/theme-modal";
import styles from "./open-button.module.css";
import { CgMenuGridR } from "react-icons/cg";
import { ThemeType } from "@/module/theme";

type Props = {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  userName: string;
};

export const OpenButton = ({ userName, currentTheme, setTheme }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <ThemeModal
        isOpen={isOpenModal}
        close={() => setIsOpenModal(false)}
        userName={userName}
        currentTheme={currentTheme}
        setTheme={setTheme}
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
