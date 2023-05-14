"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Engine, IParticlesOptions } from "tsparticles-engine";
import { rain, snow } from "./particles";
import { retrieveWeatherData } from "@/module/weather";
import { ThemeType } from "@/module/theme";

export const DynamicBackground = ({ theme }: { theme: ThemeType }) => {
  const getColor = () => {
    if (theme) return theme.color;

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
  const [particles, setParticles] = useState<IParticlesOptions | undefined>(
    undefined
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      retrieveWeatherData(position.coords).then((weathers) => {
        const weather = weathers[0];
        if (weather.precipitationProbabilityMax > 65) {
          const strong = weather.precipitationSum * 10;
          const particle =
            weather.snowfallSum > 0 ? snow(strong) : rain(strong);
          setParticles(particle);
        }
      });
    });

    const interval = setInterval(() => {
      setBackgroundColor(getColor());

      return () => {
        clearInterval(interval);
      };
    }, 60000);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
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
    >
      <Particles
        id="background-particles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          particles,
          detectRetina: true,
        }}
      />
    </div>
  );
};
