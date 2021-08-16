import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import SunPosition from "./SunPosition";
import { useEffect } from "react";
import useWeatherLoading, { hasWeatherAllData } from "../hooks/weatherLoading";
import gsap from "gsap";

const Weather = ({ cityInfo, weather }) => {
  const loading = useWeatherLoading(cityInfo, weather);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".current-weather", {
      opacity: 0,
      x: -100,
      ease: "back.out(1.3)",
      duration: 0.8,
    })
      .from(
        ".hourly-forecast",
        {
          opacity: 0,
          x: -100,
          ease: "back.out(1.3)",
          duration: 0.8,
        },
        "-=0.2"
      )
      .from(
        ".daily-forecast",
        {
          opacity: 0,
          x: 100,
          ease: "back.out(1.3)",
          duration: 0.8,
        },
        "-=0.2"
      )
      .from(
        ".sun-position",
        {
          opacity: 0,
          x: 100,
          ease: "back.out(1.3)",
          duration: 0.8,
        },
        "-=0.2"
      );
  }, [weather]);

  return (
    <div className="weather">
      {loading && <div className="loading"></div>}
      {hasWeatherAllData(weather) && (
        <>
          <CurrentWeather />
          <HourlyForecast />
          <DailyForecast />
          <SunPosition />
        </>
      )}
    </div>
  );
};

export default Weather;
