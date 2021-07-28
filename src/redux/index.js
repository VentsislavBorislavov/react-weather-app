import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import weatherReducer from './slices/weatherSlice';

export default configureStore({
	reducer: {
		search: searchReducer,
		weather: weatherReducer
	}
});
