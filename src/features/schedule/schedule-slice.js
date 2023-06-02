import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	schedule: [],
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		saveSchedule: (state, { payload }) => {
			state.schedule.push(payload);
		},
	},
});

export const { saveSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;
