import { useSelector } from 'react-redux';
import { useState } from 'react';
import useTodayWeather from '../hooks/useTodayWeather';

const CurrentWeather = () => {
	const cityInfo = useSelector((state) => state.search);
	useTodayWeather(cityInfo.key);
	const todayWeather = useSelector((state) => state.weather.todayWeather);

	return (
		<section className="current-weather">
			<h1>
				<i className="fas fa-map-marker-alt" />
				{`${cityInfo.name}, ${cityInfo.countryId}`}
			</h1>
			<p>{todayWeather.temperature}&deg;</p>
			<p>
				{todayWeather.dayTemperature.max}&deg;/{todayWeather.dayTemperature.min}&deg;
			</p>
			<p>{todayWeather.text}</p>
		</section>
	);
};

export default CurrentWeather;
