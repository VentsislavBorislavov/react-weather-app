import { Fragment } from 'react';
import { useSelector } from 'react-redux';
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
									transform: `rotate(${calculateSunPosition(
										todayWeather.sun.rise,
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

const calculateSunPosition = (start, end) => {
	const archRange = 180;
	const endOfArch = 45;
	const date = new Date();
	const current = date.getTime() / 1000;
	if (current - start < 0 || end - current < 0) {
		console.log('yo');
		return endOfArch;
	}

	const range = end - start;
	const placeInRange = current - start;
	const percentageOfRange = placeInRange / range;
	const percentageToArch = archRange * percentageOfRange;
	const thingToRemoveFromRange = endOfArch + percentageToArch;
	const finalResultForCss = thingToRemoveFromRange - archRange;

	return finalResultForCss;
};

const getTime = (epochDate) => {
	const date = new Date(epochDate * 1000);
	return `${date.getHours()}:${date.getMinutes()}`;
};

export default SunPosition;
