import { useEffect } from 'react';
import { weatherQuery, todayForecast } from '../weatherApi';
import { useDispatch } from 'react-redux';
import { setTodayWeather } from '../redux/slices/weatherSlice';
import axios from 'axios';
const useTodayWeather = (key) => {
	const dispatch = useDispatch();
	const setData = async () => {
		if (!key) return;
		const currentCondQuery = weatherQuery(key);
		const todayForecastQuery = todayForecast(key);
		let [ currentCondRes, todayFcastRes ] = await Promise.all([
			axios(currentCondQuery),
			axios(todayForecastQuery)
		]);
		const currentCData = currentCondRes.data[0];
		const data = todayFcastRes.data.DailyForecasts[0];
		const weather = {
			text: currentCData.WeatherText,
			icon: currentCData.WeatherIcon,
			isDayTime: currentCData.IsDayTime,
			temperature: Math.floor(currentCData.Temperature.Metric.Value),
			epochDate: data.EpochDate,
			sun: {
				rise: data.Sun.EpochRise,
				set: data.Sun.EpochSet
			},
			dayTemperature: {
				min: Math.floor(data.Temperature.Minimum.Value),
				max: Math.floor(data.Temperature.Maximum.Value)
			}
		};
		dispatch(setTodayWeather(weather));
	};

	useEffect(
		() => {
			setData();
		},
		[ key ]
	);
};

export default useTodayWeather;
