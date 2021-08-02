import getIcon from '../data/icons';
import { useRef } from 'react';
import { getTime } from '../data/time';

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
					<div key={fcast.DateTime} className="forecast">
						<img src={getIcon(fcast.WeatherIcon)} alt="weather icon" />
						<p className="hour">{getTime(fcast.DateTime)}</p>
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

export default HourlyForecast;
