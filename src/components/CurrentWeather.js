import { useSelector } from 'react-redux';
import { images } from '../data/icons';

const CurrentWeather = ({ todayWeather }) => {
	const cityInfo = useSelector((state) => state.search);
	return (
		<section className="current-weather">
			<h1>
				<i className="fas fa-map-marker-alt" />
				<span>{`${cityInfo.name}, ${cityInfo.countryId}`}</span>
			</h1>
			<img src={images[`${todayWeather.icon}-s.png`].default} alt="weather icon" />
			<p className="current-temp">{todayWeather.temperature}</p>
			<p className="daily-temp">
				<span>{todayWeather.dayTemperature.max}</span> /
				<span>{todayWeather.dayTemperature.min}</span>
			</p>
			<p className="condition">{todayWeather.text}</p>
		</section>
	);
};

export default CurrentWeather;
