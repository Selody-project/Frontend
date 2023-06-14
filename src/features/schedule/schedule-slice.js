import { createSlice } from "@reduxjs/toolkit";
import { createSchedule, getSchedule } from "./schedule-service.js";
import { toast } from "react-toastify";

const initialState = {
	schedule: [],
	recSchedule: [],
	month: 0,
	year: 0,
	isLoading: false,
	id: null,
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		saveSchedule: (state, { payload }) => {
			state.schedule = [...state.schedule, payload];
		},
		currentMonthFn: (state, { payload }) => {
			state.month = payload;
		},
		currentYearFn: (state, { payload }) => {
			state.year = payload;
		},
		setId: (state, { payload }) => {
			state.id = payload;
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
			})
			.addCase(getSchedule.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSchedule.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload.nonRecurrenceSchedule);
				console.log(payload.recurrenceSchedule);
				state.schedule = payload.nonRecurrenceSchedule;
				state.recSchedule = payload.recurrenceSchedule;
			})
			.addCase(getSchedule.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			});
	},
});

export const { saveSchedule, currentMonthFn, currentYearFn, setId } =
	scheduleSlice.actions;

export default scheduleSlice.reducer;
