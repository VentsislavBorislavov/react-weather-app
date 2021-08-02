import { useState, useEffect } from 'react';
import { searchQuery } from '../weatherApi';
import axios from 'axios';
const useAutocomplete = (city) => {
	const [ citySuggestions, setCitySuggestions ] = useState([]);

	const setData = async () => {
		const finalQ = searchQuery + city;
		const result = await axios(finalQ);
		setCitySuggestions(result.data.slice(0, 5));
	};

	useEffect(
		() => {
			setData();
		},
		[ city ]
	);
	return [ citySuggestions, setCitySuggestions ];
};

export default useAutocomplete;
