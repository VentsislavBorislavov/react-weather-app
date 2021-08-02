import { Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getTime } from '../data/time';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const SunPosition = () => {
	const todayWeather = useSelector((state) => state.weather.todayWeather);
	const sunPosRef = useRef(null);
	const intersection = useIntersection(sunPosRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.9
	});

	const rotateArch = (element, rotation) => {
		gsap.to(element, {
			transform: `rotate(${rotation.deg}deg)`,
			duration: rotation.animDur,
			ease: 'power1.out'
		});
	};

	const revertRotateArch = (element) => {
		gsap.to(element, {
			transform: 'rotate(-135deg)',
			duration: 0
		});
	};

	intersection && intersection.intersectionRatio > 0.9
		? rotateArch('.arches', calculateSunPosition(todayWeather.sun.rise, todayWeather.sun.set))
		: revertRotateArch('.arches');

	return (
		<Fragment>
			{Object.keys(todayWeather).length > 0 && (
				<section className="sun-position" ref={sunPosRef}>
					<h2>Sun Position</h2>
					<div className="info">
						<div className="container">
							<div className="arches">
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
	const duration = 1.5;
	const date = new Date();
	const startDate = new Date(start) / 1000;
	const endDate = new Date(end) / 1000;
	const current = date.getTime() / 1000;
	if (current - startDate < 0 || endDate - current < 0) {
		return { deg: endOfArch, animDur: duration };
	}
	const range = endDate - startDate;
	const placeInRange = current - startDate;
	const percentageOfRange = placeInRange / range;
	const percentageToArch = archRange * percentageOfRange;
	const thingToRemoveFromRange = endOfArch + percentageToArch;
	const deg = thingToRemoveFromRange - archRange;
	const animDur = duration * percentageOfRange;

	return { deg, animDur };
};

export default SunPosition;
