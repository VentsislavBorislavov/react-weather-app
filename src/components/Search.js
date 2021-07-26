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
			{autocomplete &&
				autocomplete.map((place) => (
					<div key={place.Key}>
						<span className="name">{place.LocalizedName}</span>
						<br />
						<span className="info">{`${place.AdministrativeArea.LocalizedName}, ${place.Country
							.LocalizedName}`}</span>
					</div>
				))}
		</div>
	);
};

export default Search;
