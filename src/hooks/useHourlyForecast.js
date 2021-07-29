import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setHourlyForecast } from '../redux/slices/weatherSlice';
import { hourlyForecastLink } from '../weatherApi';

const useHourlyForecast = (cityKey) => {
	const dispatch = useDispatch();
	const setHourlyData = async () => {
		if (!cityKey) return;
		const link = hourlyForecastLink(cityKey);
		const result = await axios(link);
		const data = Object.assign({}, result.data);
		dispatch(setHourlyForecast(data));
	};

	useEffect(
		() => {
			setHourlyData();
		},
		[ cityKey ]
	);
};

export default useHourlyForecast;
