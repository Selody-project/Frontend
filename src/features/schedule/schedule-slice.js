import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

import { VIEW_TYPE } from "@/constants/calendarConstants.js";

import { createSchedule, getSchedule } from "./schedule-service.js";

// currentWeek 초기화를 위해 현재 몇 주차인지 계산합니다.
export const getCurrentWeek = () => {
	const today = new Date();
	const date = today.getDate();
	const day = today.getDay(); // 0~6;
	const firstDateOfWeek = date - day;
	const currentWeekNum = Math.ceil((firstDateOfWeek - 1) / 7) + 1;
	return currentWeekNum;
};

const initialState = {
	totalSchedule: [],
	schedule: [],
	recSchedules: [],
	currentYear: new Date().getFullYear(),
	currentMonth: new Date().getMonth() + 1,
	currentWeek: getCurrentWeek(),
	isLoading: false,
	id: null,
	currentCalendarView: VIEW_TYPE.DAY_GRID_MONTH,
};

const scheduleSlice = createSlice({
	name: "schedule",
	initialState,
	reducers: {
		saveSchedule: (state, { payload }) => {
			state.schedule = [...state.schedule, payload];
		},
		setCurrentYear: (state, { payload }) => {
			state.currentWeek = payload;
		},
		setCurrentMonth: (state, { payload }) => {
			state.currentMonth = payload;
		},
		setCurrentWeek: (state, { payload }) => {
			state.currentWeek = payload;
		},
		resetCurrentDate: (state) => {
			state.currentYear = new Date().getFullYear();
			state.currentMonth = new Date().getMonth() + 1;
			state.currentWeek = getCurrentWeek();
		},
		setId: (state, { payload }) => {
			state.id = payload;
		},
		setCurrentCalenderView: (state, { payload }) => {
			if (
				payload === VIEW_TYPE.DAY_GRID_MONTH ||
				payload === VIEW_TYPE.DAY_GRID_WEEK
			) {
				state.currentCalendarView = payload;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createSchedule.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createSchedule.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("일정 추가에 성공하셨습니다!");
			})
			.addCase(createSchedule.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getSchedule.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSchedule.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.schedule = payload.nonRecurrenceSchedule;
				state.recSchedules = payload.recurrenceSchedule;
				state.totalSchedule = [
					...payload.nonRecurrenceSchedule,
					...state.recSchedules,
				];
			})
			.addCase(getSchedule.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const {
	saveSchedule,
	setCurrentYear,
	setCurrentMonth,
	setCurrentWeek,
	resetCurrentDate,
	setId,
	setCurrentCalenderView,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
