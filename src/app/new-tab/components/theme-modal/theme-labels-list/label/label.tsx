import { Theme } from "@/module/theme";
import styles from "./label.module.css";
import { sendTheme } from "@/app/actions/theme-modal";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const ThemeLabel = ({
  name,
  color,
  userName,
}: Theme[keyof Theme] & { userName: string }) => {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();

  const action = async () => {
    await sendTheme(userName ?? "", { name, color });
    await fetch("");

    // TODO: 画面の更新がうまくできていない
    // おそらくpage.tsxのserver componentgが再描画？再呼び出し？されてないことが原因
    // 以下のトランジションのリフレッシュも効いてない
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

export const DefaultThemeLabel = () => {
  return (
    <form>
      <button type="submit" className={styles.label}>
        デフォルト
      </button>
    </form>
  );
};
