import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';
import { useSelector } from 'react-redux';

function App() {
	const cityInfo = useSelector((state) => state.search);
	return (
		<div className="App">
			<Search />
			{Object.keys(cityInfo).length > 0 && <CurrentWeather />}
		</div>
	);
}

export default App;
