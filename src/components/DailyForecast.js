import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import getIcon from '../data/icons';
import { formatDate } from '../data/time';

const DailyForecast = () => {
	const { dailyForecast } = useSelector((state) => state.weather);
	return (
		<section className="daily-forecast">
			<h2>5 Day Forecast</h2>
			<div className="days">
				{dailyForecast.map((fcast) => (
					<div key={fcast.EpochDate} className="forecast">
						<span className="date">{formatDate(fcast.EpochDate)}</span>
						<img src={getIcon(fcast.Day.Icon)} alt="weather icon" />
						<div className="day-temperature">
							<span className="temperature">{Math.floor(fcast.Temperature.Minimum.Value)}</span>/
							<span className="temperature">{Math.floor(fcast.Temperature.Maximum.Value)}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default DailyForecast;
