import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';
import { useSelector } from 'react-redux';
import useTodayWeather from './hooks/useTodayWeather';
import useHourlyForecast from './hooks/useHourlyForecast';
import HourlyForecast from './components/HourlyForecast';

function App() {
	const cityInfo = useSelector((state) => state.search);
	useTodayWeather(cityInfo.key);
	useHourlyForecast(cityInfo.key);
	const { todayWeather, hourlyForecast } = useSelector((state) => state.weather);
	return (
		<div className="App">
			<Search />
			{Object.keys(todayWeather).length > 0 && <CurrentWeather todayWeather={todayWeather} />}
			{Object.keys(hourlyForecast).length > 0 && <HourlyForecast hourlyForecast={hourlyForecast} />}
		</div>
	);
}

export default App;
