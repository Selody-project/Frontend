import { createSlice } from "@reduxjs/toolkit";
import { createSchedule } from "./schedule-service.js";

const initialState = {
	schedule: [],
	backSchedule: [],
	isLoading: false,
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		saveSchedule: (state, { payload }) => {
			state.schedule.push(payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createSchedule.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createSchedule.fulfilled, (state, payload) => {
				state.isLoading = false;
				console.log(payload);
				state.backSchedule = payload;
			})
			.addCase(createSchedule.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			});
	},
});

export const { saveSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;
