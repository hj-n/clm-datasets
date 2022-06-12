import { createSlice } from "@reduxjs/toolkit";



export const sliderSlice = createSlice({
	name: "slider",
	initialState: {
		value: 100,
	},
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { setValue } = sliderSlice.actions;
export default sliderSlice.reducer;