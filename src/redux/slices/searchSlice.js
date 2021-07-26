import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setCity: (state, action) => {
			return action.payload;
		}
	}
});

export const { setCity } = searchSlice.actions;

export default searchSlice.reducer;
