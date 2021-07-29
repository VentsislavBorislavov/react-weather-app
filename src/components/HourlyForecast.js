import { images } from '../data/icons';

const HourlyForecast = ({ hourlyForecast }) => {
	return (
		<section className="hourly-forecast">
			<h2>Hourly Forecast</h2>
			<div className="display-forecast">
				{hourlyForecast.map((fcast) => (
					<div key={fcast.EpochDateTime}>
						<img src={images[`${fcast.WeatherIcon}-s.png`].default} alt="weather icon" />
						<p className="hour">{hourString(fcast.EpochDateTime)}</p>
						<p className="temperature">{Math.floor(fcast.Temperature.Value)}</p>
					</div>
				))}
			</div>
		</section>
	);
};

const hourString = (epochTime) => {
	// converting the epoch date retrived from api
	const date = new Date(epochTime * 1000);
	return `${date.getHours()}:00`;
};

export default HourlyForecast;
