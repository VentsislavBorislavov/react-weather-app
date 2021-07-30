import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFutureForecast = (cityKey, linkFunction, action) => {
	const dispatch = useDispatch();
	const setHourlyData = async () => {
		if (!cityKey) return;
		const link = linkFunction(cityKey);
		const result = await axios(link);
		const data = [ ...result.data ];
		dispatch(action(data));
	};

	useEffect(
		() => {
			setHourlyData();
		},
		[ cityKey ]
	);
};

export default useFutureForecast;
