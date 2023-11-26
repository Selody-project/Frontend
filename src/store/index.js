import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "@/features/auth/auth-slice.js";
import groupInviteSlice from "@/features/group/group-invite-slice.js";
import groupSlice from "@/features/group/group-slice.js";
import scheduleSlice from "@/features/schedule/schedule-slice.js";
import uiSlice from "@/features/ui/ui-slice.js";

const rootReducer = combineReducers({
	auth: authSlice,
	schedule: scheduleSlice,
	group: groupSlice,
	groupInvite: groupInviteSlice,
	ui: uiSlice,
});

export const setupStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};
