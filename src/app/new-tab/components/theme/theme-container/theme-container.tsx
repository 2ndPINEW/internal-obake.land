"use client";

import { ThemeType } from "@/module/theme";
import { DynamicBackground } from "../../dynamic-background";
import styles from "./theme-container.module.css";
import { OpenButton } from "../button/open-button";
import { useMemo, useState } from "react";

export const ThemeContainer = ({
  theme,
  userName,
}: {
  theme: ThemeType;
  userName: string;
}) => {
  const defaultTheme = useMemo(() => theme, [theme]);
  const [themeState, setThemeState] = useState<ThemeType | null>(defaultTheme);

  return (
    <div>
      <DynamicBackground theme={themeState ?? theme}></DynamicBackground>
      <div className={styles.openModalButton}>
        <OpenButton
          userName={userName}
          currentTheme={themeState ?? theme}
          setTheme={setThemeState}
        />
      </div>
    </div>
  );
};
