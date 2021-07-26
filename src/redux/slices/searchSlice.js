import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setCityInfo: (state, action) => {
			return action.payload;
		}
	}
});

export const { setCityInfo } = searchSlice.actions;

export default searchSlice.reducer;
