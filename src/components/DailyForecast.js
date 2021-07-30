import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import useDailyForecast from '../hooks/useDailyForecast';
import getIcon from '../data/icons';

const DailyForecast = () => {
	const cityInfo = useSelector((state) => state.search);
	useDailyForecast(cityInfo.key);
	const { dailyForecast } = useSelector((state) => state.weather);
	return (
		<Fragment>
			{dailyForecast.length > 0 && (
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
			)}
		</Fragment>
	);
};

const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Sep', 'Nov', 'Dec' ];

const formatDate = (epochTime) => {
	const date = new Date(epochTime * 1000);
	let day = date.getDay();
	let month = date.getMonth();
	let monthDate = date.getDate();
	return `${days[day]}, ${months[month]} ${monthDate}`;
};

export default DailyForecast;
