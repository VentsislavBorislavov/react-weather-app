import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todayWeather: {},
	tenDayForecast: [],
	hourlyForecast: []
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setTodayWeather: (state, action) => {
			state.todayWeather = action.payload;
		},
		setHourlyForecast: (state, action) => {
			state.hourlyForecast = action.payload;
		}
	}
});

export const { setTodayWeather, setHourlyForecast } = weatherSlice.actions;

export default weatherSlice.reducer;
