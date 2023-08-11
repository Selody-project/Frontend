import { configureStore } from "@reduxjs/toolkit";

import groupInviteSlice from "@/features/group/group-invite-slice.js";
import groupSlice from "@/features/group/group-slice.js";
import scheduleSlice from "@/features/schedule/schedule-slice.js";
import uiSlice from "@/features/ui/ui-slice.js";
import userSlice from "@/features/user/user-slice.js";

export const store = configureStore({
	reducer: {
		user: userSlice,
		schedule: scheduleSlice,
		group: groupSlice,
		groupInvite: groupInviteSlice,
		ui: uiSlice,
	},
});
