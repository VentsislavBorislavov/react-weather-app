export const apiKey = 'p8xPgYU06fAHKxtN6dAqin6buFqjcd5M';
export const searchQuery = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=`;
export const weatherQuery = (cityId) =>
	`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${apiKey}`;
