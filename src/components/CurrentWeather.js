import { useSelector } from 'react-redux';
import { useState } from 'react';
import useTodayWeather from '../hooks/useTodayWeather';

const CurrentWeather = () => {
	const cityInfo = useSelector((state) => state.search);
	const [ currentWeather, setCurrentWeather ] = useTodayWeather(cityInfo.key);

	return (
		<section className="current-weather">
			{/* <h1>
				<i className="fas fa-map-marker-alt" />
				{`${cityInfo.name}, ${cityInfo.countryId}`}
			</h1> */}
			{JSON.stringify(currentWeather)}
		</section>
	);
};

export default CurrentWeather;
