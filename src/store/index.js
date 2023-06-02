import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/features/user/user-slice.js";

export const store = configureStore({
	reducer: {
		user: userSlice,
	},
});
