"use client";

import { useEffect, useState } from "react";

export const DynamicBackground = () => {
  const getColor = () => {
    const now = new Date();
    const hour = now.getHours();
    if (5 <= hour && hour < 8) {
      return "#677fa3";
    } else if (8 <= hour && hour < 11) {
      return "#8EAAD3";
    } else if (11 <= hour && hour < 14) {
      return "#98b6e3";
    } else if (14 <= hour && hour < 17) {
      return "#9CC5BF";
    } else if (17 <= hour && hour < 19) {
      return "#F2B880";
    } else if (19 <= hour && hour < 21) {
      return "#677fa3";
    } else {
      return "#41526b";
    }
  };
  const [backgroundColor, setBackgroundColor] = useState(getColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(getColor());

      return () => {
        clearInterval(interval);
      };
    }, 60000);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100dvw",
        height: "100dvh",
        backgroundColor,
        zIndex: -1,
        transition: "background-color 30s ease",
      }}
    ></div>
  );
};
