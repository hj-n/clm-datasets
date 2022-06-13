import { createSlice } from "@reduxjs/toolkit";



export const sliderSlice = createSlice({
	name: "slider",
	initialState: {
		value: [0, 1],
	},
	reducers: {
		setValue: (state, action) => {
			state.value[0] = action.payload[0];
			state.value[1] = action.payload[1];
		}
	}
});

export const { setValue } = sliderSlice.actions;
export default sliderSlice.reducer;