import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchQuery } from '../weatherApi';
import useAutocomplete from '../hooks/useAutocomplete.js';

const Search = () => {
	const [ city, setCity ] = useState('');
	const autocomplete = useAutocomplete(city);
	return (
		<div className="search">
			<input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search City" />
		</div>
	);
};

export default Search;
