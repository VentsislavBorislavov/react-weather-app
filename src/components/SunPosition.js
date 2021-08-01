import { Fragment } from 'react';
import { useSelector } from 'react-redux';
// epochDate
// sun.rise
// sun.set
const SunPosition = () => {
	const todayWeather = useSelector((state) => state.weather.todayWeather);

	return (
		<Fragment>
			{Object.keys(todayWeather).length > 0 && (
				<section className="sun-position">
					<h2>Sun Position</h2>
					<div className="info">
						<div className="container">
							<div
								className="arches"
								style={{
									transform: `translate(${calculateSunPosition(
										todayWeather.sun.rise,
										todayWeather.epochDate,
										todayWeather.sun.set
									)}deg)`
								}}
							>
								<i className="fas fa-sun sun" />
							</div>
						</div>
						<div className="time">
							<span className="rise">{getTime(todayWeather.sun.rise)}</span>
							<span className="set">{getTime(todayWeather.sun.set)}</span>
						</div>
					</div>
				</section>
			)}
		</Fragment>
	);
};

const calculateSunPosition = (start, current, end) => {
	const archRange = 180;
	const endOfArch = 45;
	if (current - start < 0 || end - current < 0) {
		return endOfArch;
	}
	const range = end - start;
	const placeInRange = current - start;
	const percentageOfRange = placeInRange / range;
	const percentageToArch = archRange * percentageOfRange;
	const thingToRemoveFromRange = endOfArch + percentageToArch;
	const finalResultForCss = thingToRemoveFromRange - archRange;

	return Math.floor(finalResultForCss);
};

const getTime = (epochDate) => {
	const date = new Date(epochDate * 1000);
	return `${date.getHours()}:${date.getMinutes()}`;
};

export default SunPosition;
