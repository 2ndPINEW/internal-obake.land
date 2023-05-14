import { ThemeLabel } from "../label/label";
import { ThemeNameTypes, ThemeType, themes } from "@/module/theme";
import styles from "./theme-labels-list.module.css";

type Props = {
  userName: string;
  setTheme: (theme: ThemeType) => void;
  currentTheme: ThemeType;
  close: () => void;
};

export const ThemeLabelsList = ({
  userName,
  currentTheme,
  setTheme,
  close,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(themes).map((arr) => {
        const enName = arr[0];
        const { name: jaName, color } = arr[1];
        return (
          <div key={enName}>
            <ThemeLabel
              name={jaName as ThemeNameTypes}
              color={color}
              userName={userName}
              currentTheme={currentTheme}
              setTheme={setTheme}
              close={close}
            />
          </div>
        );
      })}
    </div>
  );
};
