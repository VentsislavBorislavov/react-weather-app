import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todayWeather: {},
  dailyForecast: [],
  hourlyForecast: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setTodayWeather: (state, action) => {
      state.todayWeather = action.payload;
    },
    setHourlyForecast: (state, action) => {
      state.hourlyForecast = action.payload;
    },
    setDailyForecast: (state, action) => {
      state.dailyForecast = action.payload;
    },
    resetWeather: (state) => {
      return Object.assign({}, initialState);
    },
  },
});

export const {
  setTodayWeather,
  setHourlyForecast,
  setDailyForecast,
  resetWeather,
} = weatherSlice.actions;

export default weatherSlice.reducer;
