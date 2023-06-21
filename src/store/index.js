import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/features/user/user-slice.js";
import scheduleSlice from "@/features/schedule/schedule-slice.js";
import groupSlice from "@/features/group/group-slice.js";

export const store = configureStore({
	reducer: {
		user: userSlice,
		schedule: scheduleSlice,
		group: groupSlice,
	},
});
