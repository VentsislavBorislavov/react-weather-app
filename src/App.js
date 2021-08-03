import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import useTodayWeather from "./hooks/useTodayWeather";
import useFutureForecast from "./hooks/useHourlyForecast";
import useDailyForecast from "./hooks/useDailyForecast";
import useWeatherLoading from "./hooks/useWeatherLoading";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  const cityInfo = useSelector((state) => state.search);
  const weather = useSelector((state) => state.weather);
  const [loading, dataLoaded] = useWeatherLoading(cityInfo, weather);
  useTodayWeather(cityInfo.key);
  useFutureForecast(cityInfo.key);
  useDailyForecast(cityInfo.key);

  return (
    <div className="App">
      <Search />
      {loading && <div className="loading" />}
      {dataLoaded && <Weather />}
      <Footer />
    </div>
  );
}

export default App;
