import { useState, useEffect } from 'react';

const useWeatherLoading = (cityInfo, weather) => {
	const [ loading, setLoading ] = useState(false);
	const [ dataLoaded, setDataLoaded ] = useState(false);

	const isWeatherLoaded = () => {
		return Object.values(weather).every((v) => Object.keys(v).length > 0);
	};

	const isCityInfoLoaded = () => {
		return Object.keys(cityInfo).length > 0;
	};

	useEffect(
		() => {
			const cityLoaded = isCityInfoLoaded();
			const weatherLoaded = isWeatherLoaded();
			if (cityLoaded && !weatherLoaded) {
				setLoading(true);
			} else if (cityLoaded && weatherLoaded) {
				setLoading(false);
				setDataLoaded(true);
			}
		},
		[ weather, cityInfo ]
	);
	return [ loading, dataLoaded ];
};

export default useWeatherLoading;
