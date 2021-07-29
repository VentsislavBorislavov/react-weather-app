import { images } from '../data/icons';
import { useRef } from 'react';

const HourlyForecast = ({ hourlyForecast }) => {
	const dForecastRef = useRef(null);

	const scrollLeft = () => {
		dForecastRef.current.scrollLeft -= 75;
	};

	const scrollRight = () => {
		dForecastRef.current.scrollLeft += 75;
	};

	return (
		<section className="hourly-forecast">
			<h2>12 Hour Forecast</h2>
			<button className="scroll scroll-left" onClick={scrollLeft}>
				<i className="fas fa-arrow-left" />
			</button>
			<div className="display-forecast" ref={dForecastRef}>
				{hourlyForecast.map((fcast) => (
					<div key={fcast.EpochDateTime} className="forecast">
						<img src={images[`${fcast.WeatherIcon}-s.png`].default} alt="weather icon" />
						<p className="hour">{hourString(fcast.EpochDateTime)}</p>
						<p className="temperature">{Math.floor(fcast.Temperature.Value)}</p>
					</div>
				))}
			</div>
			<button className="scroll scroll-right" onClick={scrollRight}>
				<i className="fas fa-arrow-right" />
			</button>
		</section>
	);
};

const hourString = (epochTime) => {
	// converting the epoch date retrived from api
	const date = new Date(epochTime * 1000);
	return `${date.getHours()}:00`;
};

export default HourlyForecast;
