import { useState, useEffect } from "react";

const useWeatherLoading = (cityInfo, weather) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cityLoaded = isCityInfoLoaded(cityInfo);
    const weatherLoaded = hasWeatherAllData(weather);
    if (cityLoaded && !weatherLoaded) {
      setLoading(true);
    } else if (cityLoaded && weatherLoaded) {
      setLoading(false);
    }
  }, [weather, cityInfo]);
  return loading;
};

export const hasWeatherAllData = (weather) => {
  return Object.values(weather).every((v) => Object.keys(v).length > 0);
};

export const isCityInfoLoaded = (cityInfo) => {
  return Object.keys(cityInfo).length > 0;
};

export default useWeatherLoading;
