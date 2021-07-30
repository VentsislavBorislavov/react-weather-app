import { useSelector } from 'react-redux';
import { setDailyForecast } from '../redux/slices/weatherSlice';
import { dailyForecastLink } from '../weatherApi';
import useFutureForecast from '../hooks/useHourlyForecast';
import { Fragment } from 'react';

const DailyForecast = () => {
	const cityInfo = useSelector((state) => state.search);
	const { dailyForecast } = useSelector((state) => state.weather);

	return (
		<Fragment>
			{true && (
				<section className="daily-forecast">
					<h2>5 Day forecasts</h2>
				</section>
			)}
		</Fragment>
	);
};

export default DailyForecast;
