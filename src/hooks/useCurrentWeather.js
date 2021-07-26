import { useState, useEffect } from 'react';
import { weatherQuery } from '../weatherApi';
import axios from 'axios';
const useCurrentWeather = (coutryId) => {
	const [ currentWeather, setCurrentWeather ] = useState([]);

	const setData = async () => {
		const finalQ = weatherQuery(coutryId);
		console.log(finalQ);
		const result = await axios(finalQ);
		setCurrentWeather(result.data);
	};

	useEffect(
		() => {
			setData();
		},
		[ coutryId ]
	);
	return [ currentWeather, setCurrentWeather ];
};

export default useCurrentWeather;
