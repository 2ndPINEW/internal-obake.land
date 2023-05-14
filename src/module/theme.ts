export const themes = {
  spring: {
    name: "春",
    color: "#DFFFD8",
  },
  summer: {
    name: "夏",
    color: "#FF8787",
  },
  autumn: {
    name: "秋",
    color: "#EA907A",
  },
  winter: {
    name: "冬",
    color: "#6C9BCF",
  },
};

export type Theme = {
  spring: {
    name: "春";
    color: string;
  };
  summer: {
    name: "夏";
    color: string;
  };
  autumn: {
    name: "秋";
    color: string;
  };
  winter: {
    name: "冬";
    color: string;
  };
};

export type ThemeNameTypes = Theme[keyof Theme]["name"];
export type ThemeType = { name: ThemeNameTypes; color: string };
