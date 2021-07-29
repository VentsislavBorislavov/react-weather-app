import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';
import { useSelector } from 'react-redux';
import useTodayWeather from './hooks/useTodayWeather';

function App() {
	const cityInfo = useSelector((state) => state.search);
	useTodayWeather(cityInfo.key);
	const { todayWeather } = useSelector((state) => state.weather);

	return (
		<div className="App">
			<Search />
			{Object.keys(todayWeather).length > 0 && <CurrentWeather todayWeather={todayWeather} />}
		</div>
	);
}

export default App;
