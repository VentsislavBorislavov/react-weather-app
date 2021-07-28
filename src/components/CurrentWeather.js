import { useSelector } from 'react-redux';
import { useState } from 'react';
import { images } from '../data/icons';
import icon1 from '../images/icons/1-s.png';

const CurrentWeather = ({ todayWeather }) => {
	const cityInfo = useSelector((state) => state.search);
	return (
		<section className="current-weather">
			<h1>
				<i className="fas fa-map-marker-alt" />
				{`${cityInfo.name}, ${cityInfo.countryId}`}
			</h1>
			<img src={images[`${todayWeather.icon}-s.png`].default} alt="weather icon" />
			<p>{todayWeather.temperature}&deg;</p>
			<p>
				{todayWeather.dayTemperature.max}&deg;/{todayWeather.dayTemperature.min}&deg;
			</p>
			<p>{todayWeather.text}</p>
		</section>
	);
};

export default CurrentWeather;
