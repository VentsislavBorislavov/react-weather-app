import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import useWeatherLoading from '../hooks/useWeatherLoading';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import SunPosition from './SunPosition';

const Weather = () => {
	const cityInfo = useSelector((state) => state.search);
	const weather = useSelector((state) => state.weather);
	const [ loading, dataLoaded ] = useWeatherLoading(cityInfo, weather);

	return (
		<Fragment>
			{loading && <div className="loading" />}
			{dataLoaded && (
				<div className="weather">
					<CurrentWeather />
					<HourlyForecast />
					<DailyForecast />
					<SunPosition />
				</div>
			)}
		</Fragment>
	);
};

export default Weather;
