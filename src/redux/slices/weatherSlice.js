import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todayWeather: {},
	tenDayForecast: {},
	hourlyForecast: {}
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setTodayWeather: (state, action) => {
			state.todayWeather = action.payload;
		}
	}
});

export const { todayWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
