export const apiKey = 'eYNPT4QOEqkkb9PlKVFXBiUFX40Tq6Dy';
export const searchQuery = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=`;
export const weatherQuery = (cityKey) =>
	`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
export const todayForecast = (cityKey) =>
	`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&details=true&metric=true`;
export const hourlyForecastLink = (cityKey) =>
	`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${apiKey}&metric=true`;
export const dailyForecastLink = (cityKey) =>
	`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`;
