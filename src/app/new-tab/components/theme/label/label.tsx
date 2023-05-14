import { Theme, ThemeType } from "@/module/theme";
import styles from "./label.module.css";
import { sendTheme } from "@/app/actions/theme-modal";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type Props = Theme[keyof Theme] & {
  userName: string;
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  close: () => void;
};

export const ThemeLabel = ({
  name,
  color,
  userName,
  setTheme,
  close,
}: Props) => {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();

  const action = async () => {
    await sendTheme(userName ?? "", { name, color });
    setTheme({ name, color });
    close();

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <form action={action}>
      <input
        type="submit"
        className={styles.label}
        value={name}
        style={{ background: color }}
      />
    </form>
  );
};
