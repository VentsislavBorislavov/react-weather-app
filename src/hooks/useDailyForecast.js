import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDailyForecast } from '../redux/slices/weatherSlice';
import { dailyForecastLink } from '../weatherApi';

const useDailyForecast = (cityKey) => {
	const dispatch = useDispatch();
	const setData = async () => {
		if (!cityKey) return;
		const link = dailyForecastLink(cityKey);
		const result = await axios(link);
		const data = [ ...result.data.DailyForecasts ];
		dispatch(setDailyForecast(data));
	};

	useEffect(
		() => {
			setData();
		},
		[ cityKey ]
	);
};

export default useDailyForecast;
