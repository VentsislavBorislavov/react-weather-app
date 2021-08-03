import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import SunPosition from "./SunPosition";
import { useEffect } from "react";
import gsap, { Back } from "gsap";

const Weather = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".current-weather", {
      opacity: 0,
      x: -100,
      ease: Back,
      duration: 0.8,
    })
      .from(
        ".hourly-forecast",
        {
          opacity: 0,
          x: -100,
          ease: Back,
          duration: 0.8,
        },
        "-=0.2"
      )
      .from(
        ".daily-forecast",
        {
          opacity: 0,
          x: 100,
          ease: Back,
          duration: 0.8,
        },
        "-=0.2"
      )
      .from(
        ".sun-position",
        {
          opacity: 0,
          x: 100,
          ease: Back,
          duration: 0.8,
        },
        "-=0.2"
      );
  }, []);

  return (
    <div className="weather">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
      <SunPosition />
    </div>
  );
};

export default Weather;
