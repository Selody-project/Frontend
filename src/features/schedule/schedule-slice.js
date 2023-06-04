import { createSlice } from "@reduxjs/toolkit";
import { createSchedule } from "./schedule-service.js";
import { toast } from "react-toastify";

const initialState = {
	schedule: [],
	// backSchedule: [],
	isLoading: false,
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		saveSchedule: (state, { payload }) => {
			state.schedule = [...state.schedule, payload];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createSchedule.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createSchedule.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.success("일정 추가에 성공하셨습니다!");
			})
			.addCase(createSchedule.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			});
	},
});

export const { saveSchedule } = scheduleSlice.actions;

export default scheduleSlice.reducer;
