import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import useTodayWeather from './hooks/useTodayWeather';
import useFutureForecast from './hooks/useHourlyForecast';
import useDailyForecast from './hooks/useDailyForecast';
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
	const cityInfo = useSelector((state) => state.search);
	useTodayWeather(cityInfo.key);
	useFutureForecast(cityInfo.key);
	useDailyForecast(cityInfo.key);

	return (
		<div className="App">
			<Search />
			<Weather />
		</div>
	);
}

export default App;
