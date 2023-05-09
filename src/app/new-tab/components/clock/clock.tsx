"use client";

import { useEffect, useState } from "react";
import { Darumadrop_One } from "next/font/google";
import styles from "./clock.module.css";

const font = Darumadrop_One({ weight: "400", subsets: [] });

export const Clock = () => {
  const calcClock = () => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    return `${hour}:${minute}`;
  };

  const [clock, setClock] = useState(calcClock());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(calcClock());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div className={[font.className, styles.clock].join(" ")}>{clock}</div>;
};
