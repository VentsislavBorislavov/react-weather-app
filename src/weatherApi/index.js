export const apiKey = "xJST2MZjQ68twPEOOo0alpJNHx0iUvGl"; //Place your accuweather api key here
export const searchQuery = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=`;
export const weatherQuery = (cityKey) =>
  `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
export const todayForecast = (cityKey) =>
  `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&details=true&metric=true`;
export const hourlyForecastLink = (cityKey) =>
  `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${cityKey}?apikey=${apiKey}&metric=true`;
export const dailyForecastLink = (cityKey) =>
  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`;
