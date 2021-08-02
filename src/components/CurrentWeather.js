import { useSelector } from 'react-redux';
import getIcon from '../data/icons';

const CurrentWeather = () => {
	const cityInfo = useSelector((state) => state.search);
	const { todayWeather } = useSelector((state) => state.weather);
	return (
		<section className="current-weather">
			<h1>
				<i className="fas fa-map-marker-alt" />
				<span>{`${cityInfo.name}, ${cityInfo.countryId}`}</span>
			</h1>
			<img src={getIcon(todayWeather.icon)} alt="weather icon" />
			<p className="current-temp temperature">{todayWeather.temperature}</p>
			<p className="daily-temp">
				<span className="temperature">{todayWeather.dayTemperature.max}</span> /
				<span className="temperature">{todayWeather.dayTemperature.min}</span>
			</p>
			<p className="condition">{todayWeather.text}</p>
		</section>
	);
};

export default CurrentWeather;
