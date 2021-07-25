import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cityInput: '',
	city: {
		mainText: '',
		secondaryText: ''
	}
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		updateCity: (state, action) => {
			state.cityInput = action.payload;
		},
		setCity: (state, action) => {
			state.city = action.payload;
		}
	}
});

export const { updateCity, setCity } = searchSlice.actions;

export default searchSlice.reducer;
