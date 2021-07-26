import { useState, useEffect } from 'react';
import { weatherQuery, todayForecast } from '../weatherApi';
import axios from 'axios';
const useTodayWeather = (key) => {
	const [ todayWeather, setTodayWeather ] = useState([]);

	const setData = async () => {
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
			temperature: currentCData.Temperature.Metric.Value,
			epochDate: data.EpochDate,
			sun: {
				rise: data.Sun.EpochRise,
				set: data.Sun.EpochSet
			},
			dayTemperature: {
				min: data.Temperature.Minimum.Value,
				max: data.Temperature.Maximum.Value
			}
		};
		setTodayWeather(weather);
	};

	useEffect(
		() => {
			setData();
		},
		[ key ]
	);
	return [ todayWeather, setTodayWeather ];
};

export default useTodayWeather;