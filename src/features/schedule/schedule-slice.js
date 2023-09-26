import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

import { VIEW_TYPE } from "@/constants/calendarConstants.js";
import { getCurrentWeek } from "@/utils/calendarUtils.js";

import {
	createSchedule,
	getSchedules,
	getSchedulesForTheWeek,
	getTodaySchedules,
} from "./schedule-service.js";

const initialState = {
	nonRecSchedules: [],
	recSchedules: [],
	todaySchedules: [],
	schedulesForTheWeek: [],
	month: new Date().getMonth() + 1,
	year: new Date().getFullYear(),
	week: getCurrentWeek(),
	currentView: VIEW_TYPE.DAY_GRID_MONTH,
	isLoading: false,
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		resetDate: (state) => {
			state.year = new Date().getFullYear();
			state.month = new Date().getMonth() + 1;
			state.week = getCurrentWeek();
		},
		setYear: (state, { payload }) => {
			state.year = payload;
		},
		setMonth: (state, { payload }) => {
			state.month = payload;
		},
		setWeek: (state, { payload }) => {
			state.week = payload;
		},
		resetWeek: (state) => {
			state.week = getCurrentWeek();
		},
		setCurrentView: (state, { payload }) => {
			if (
				payload !== VIEW_TYPE.DAY_GRID_MONTH &&
				payload !== VIEW_TYPE.DAY_GRID_WEEK
			) {
				throw new Error("잘못된 view type입니다.");
			}
			state.currentView = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createSchedule.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createSchedule.fulfilled, (state, { payload }) => {
				toast.success("일정 추가에 성공하셨습니다!");
				if (payload.recurrence) {
					state.recSchedules.push(payload);
				} else {
					state.nonRecSchedules.push(payload);
				}
				const today = new Date();
				const isToday =
					today.toDateString() ===
					new Date(payload.startDateTime).toDateString();
				const lastDayAfterSevenDaysEnd = new Date(
					today.getFullYear(),
					today.getMonth(),
					today.getDate() + 8,
				);
				const isForTheWeek =
					!isToday &&
					new Date(payload.startDateTime) < lastDayAfterSevenDaysEnd;
				// eslint-disable-next-line no-nested-ternary
				const arrayToUpdate = isToday
					? state.todaySchedules
					: isForTheWeek
					? state.schedulesForTheWeek
					: null;
				if (arrayToUpdate) {
					const indexToInsert = arrayToUpdate.findIndex(
						(schedule) =>
							new Date(schedule.startDateTime) >=
							new Date(payload.startDateTime),
					);
					if (indexToInsert === -1) {
						arrayToUpdate.push(payload);
					} else {
						arrayToUpdate.splice(indexToInsert, 0, payload);
					}
				}
				state.isLoading = false;
			})
			.addCase(createSchedule.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getTodaySchedules.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTodaySchedules.fulfilled, (state, { payload }) => {
				const { nonRecurrenceSchedule, recurrenceSchedule } = payload;
				state.isLoading = false;
				state.todaySchedules = nonRecurrenceSchedule
					.concat(recurrenceSchedule)
					.sort((prev, curr) => prev.startDateTime > curr.startDateTime);
			})
			.addCase(getTodaySchedules.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getSchedulesForTheWeek.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSchedulesForTheWeek.fulfilled, (state, { payload }) => {
				const { nonRecurrenceSchedule, recurrenceSchedule } = payload;
				state.isLoading = false;
				state.schedulesForTheWeek = nonRecurrenceSchedule
					.concat(recurrenceSchedule)
					.sort((prev, curr) => prev.startDateTime > curr.startDateTime);
			})
			.addCase(getSchedulesForTheWeek.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getSchedules.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSchedules.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.nonRecSchedules = payload.nonRecurrenceSchedule;
				state.recSchedules = payload.recurrenceSchedule;
			})
			.addCase(getSchedules.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const {
	resetDate,
	setYear,
	setMonth,
	setWeek,
	resetWeek,
	setCurrentView,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
