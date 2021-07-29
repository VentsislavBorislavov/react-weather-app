import { images } from '../data/icons';
import { useRef } from 'react';

const HourlyForecast = ({ hourlyForecast }) => {
	return (
		<section className="hourly-forecast">
			<h2>12 Hour Forecast</h2>
			<div className="display-forecast">
				<button className="scroll scroll-left">
					<i className="fas fa-arrow-left" />
				</button>
				{hourlyForecast.map((fcast) => (
					<div key={fcast.EpochDateTime} className="forecast">
						<img src={images[`${fcast.WeatherIcon}-s.png`].default} alt="weather icon" />
						<p className="hour">{hourString(fcast.EpochDateTime)}</p>
						<p className="temperature">{Math.floor(fcast.Temperature.Value)}</p>
					</div>
				))}
				<button className="scroll scroll-right">
					<i className="fas fa-arrow-right" />
				</button>
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
