import { configureStore } from "@reduxjs/toolkit";
import { sliderSlice } from "./sliderSlice";

export const store = configureStore({
	reducer: {
		slider: sliderSlice.reducer,
	}
});
