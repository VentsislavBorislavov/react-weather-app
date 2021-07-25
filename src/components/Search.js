import { useDispatch } from 'react-redux';
import { useState } from 'react';
import useAutocomplete from '../hooks/useAutocomplete.js';
import { setCityInfo } from '../redux/slices/searchSlice';

const Search = () => {
	const [ city, setCity ] = useState('');
	const autocomplete = useAutocomplete(city);
	const dispatch = useDispatch();
	const chooseCity = (city) => {
		console.log(city);
		const cityInfo = {
			key: city.Key,
			name: city.LocalizedName,
			country: city.Country.LocalizedName,
			administrativeArea: city.AdministrativeArea.LocalizedName
		};

		dispatch(setCityInfo(cityInfo));
	};
	return (
		<div className="search">
			<div className="search-box">
				<i className="fas fa-search-location" />
				<input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search City" />
			</div>
			{autocomplete &&
				autocomplete.map((place) => (
					<div key={place.Key} onClick={chooseCity(place)}>
						<span className="name">{place.LocalizedName}</span>
						<span className="info">{`${place.AdministrativeArea.LocalizedName}, ${place.Country
							.LocalizedName}`}</span>
					</div>
				))}
		</div>
	);
};

export default Search;
