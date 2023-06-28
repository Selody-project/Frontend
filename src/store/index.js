import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/features/user/user-slice.js";
import scheduleSlice from "@/features/schedule/schedule-slice.js";
import groupSlice from "@/features/group/group-slice.js";
import uiSlice from "@/features/ui/ui-slice.js";

export const store = configureStore({
	reducer: {
		user: userSlice,
		schedule: scheduleSlice,
		group: groupSlice,
		ui: uiSlice,
	},
});
