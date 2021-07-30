import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import useTodayWeather from './hooks/useTodayWeather';
import useFutureForecast from './hooks/useHourlyForecast';
import { setHourlyForecast } from './redux/slices/weatherSlice';
import { hourlyForecastLink } from './weatherApi';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

function App() {
	const cityInfo = useSelector((state) => state.search);
	useTodayWeather(cityInfo.key);
	useFutureForecast(cityInfo.key, hourlyForecastLink, setHourlyForecast);
	const { todayWeather, hourlyForecast } = useSelector((state) => state.weather);
	return (
		<div className="App">
			<Search />
			{Object.keys(todayWeather).length > 0 && <CurrentWeather todayWeather={todayWeather} />}
			{Object.keys(hourlyForecast).length > 0 && <HourlyForecast hourlyForecast={hourlyForecast} />}
			<DailyForecast />
		</div>
	);
}

export default App;
