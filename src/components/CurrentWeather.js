import { useSelector } from 'react-redux';
import { useState } from 'react';

const CurrentWeather = () => {
	const cityInfo = useSelector((state) => state.search);
	return (
		<div>
			<li />
		</div>
	);
};

export default CurrentWeather;
