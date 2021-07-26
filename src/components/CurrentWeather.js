import { useSelector } from 'react-redux';
import { useState } from 'react';
import useCurrentWeather from '../hooks/useCurrentWeather';

const CurrentWeather = () => {
	const cityInfo = useSelector((state) => state.search);
	const [ currentWeather, setCurrentWeather ] = useCurrentWeather(46791);

	return (
		<div>
			<li>{JSON.stringify(currentWeather)}</li>
		</div>
	);
};

export default CurrentWeather;
