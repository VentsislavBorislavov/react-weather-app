export const apiKey = 'p8xPgYU06fAHKxtN6dAqin6buFqjcd5M';
export const searchQuery = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=`;
export const weatherQuery = (cityKey) =>
	`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
export const todayForecast = (cityKey) =>
	`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&details=true&metric=true`;
