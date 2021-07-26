import React from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';

function App() {
	return (
		<div className="App">
			<Search />
			<CurrentWeather />
		</div>
	);
}

export default App;
