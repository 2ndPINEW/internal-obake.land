import {
  DefaultThemeLabel,
  ThemeLabel,
} from "../theme-labels-list/label/label";
import { ThemeNameTypes, themes } from "@/module/theme";
import styles from "./theme-labels-list.module.css";

export const ThemeLabelsList = ({ userName }: { userName: string }) => {
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
            />
          </div>
        );
      })}
      <div>
        <DefaultThemeLabel />
      </div>
    </div>
  );
};
