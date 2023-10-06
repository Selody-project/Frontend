import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

import { VIEW_TYPE } from "@/constants/calendarConstants.js";
import { getCurrentWeek } from "@/utils/calendarUtils.js";

import {
	createSchedule,
	getSchedules,
	getSchedulesForTheWeek,
	getTodaySchedules,
	updateSchedule,
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

const checkIsTodaySchedule = (startStr, endStr) => {
	const startDate = new Date(startStr);
	const endDate = new Date(endStr);
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	// 시작 날짜가 오늘인 경우
	if (today.toDateString() === startDate.toDateString()) {
		return true;
	}
	// 시작 날짜가 오늘 이전인데, 끝나는 날짜는 오늘 시작 이후일 경우
	if (today > startDate && endDate > today) {
		return true;
	}
	return false;
};

const checkIsScheduleForTheWeek = (startStr, endStr) => {
	const startDate = new Date(startStr);
	const endDate = new Date(endStr);
	const today = new Date();
	const nextDate = new Date();
	nextDate.setDate(nextDate.getDate() + 1);
	nextDate.setHours(0, 0, 0, 0);
	const startDateAfterSevenDays = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 8,
	);
	// 시작 날짜가 7일 이후인 경우
	if (startDate >= startDateAfterSevenDays) {
		return false;
	}
	// 시작 날짜가 다음날부터 7일 이전인 경우
	if (startDate >= nextDate && startDate < startDateAfterSevenDays) {
		return true;
	}
	// 시작 날짜가 오늘까지인 일정들
	// 그 중 끝나는 일정이 다음날 이상인 경우
	if (endDate >= nextDate) {
		return true;
	}
	return false;
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
			.addCase(createSchedule.fulfilled, (state, { payload: newSchedule }) => {
				toast.success("일정이 추가되었습니다");
				if (newSchedule.recurrence) {
					state.recSchedules.push(newSchedule);
				} else {
					state.nonRecSchedules.push(newSchedule);
				}
				if (
					checkIsTodaySchedule(
						newSchedule.startDateTime,
						newSchedule.endDateTime || newSchedule.until,
					)
				) {
					state.todaySchedules.push(newSchedule);
					state.todaySchedules.sort(
						(prev, curr) =>
							new Date(prev.startDateTime) - new Date(curr.startDateTime),
					);
				}
				if (
					checkIsScheduleForTheWeek(
						newSchedule.startDateTime,
						newSchedule.endDateTime || newSchedule.until,
					)
				) {
					state.schedulesForTheWeek.push(newSchedule);
					state.schedulesForTheWeek.sort(
						(prev, curr) =>
							new Date(prev.startDateTime) - new Date(curr.startDateTime),
					);
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
					.sort(
						(prev, curr) =>
							new Date(prev.startDateTime) - new Date(curr.startDateTime),
					);
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
					.sort(
						(prev, curr) =>
							new Date(prev.startDateTime) - new Date(curr.startDateTime),
					);
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
			})
			.addCase(updateSchedule.pending, (state) => {
				toast.pending("");
				state.isLoading = true;
			})
			.addCase(
				updateSchedule.fulfilled,
				(state, { payload: updatedSchedule }) => {
					toast.success("일정이 수정되었습니다");
					const indexInNonRecSchedules = state.nonRecSchedules.findIndex(
						(schedule) => schedule.id === updatedSchedule.id,
					);
					const indexInRecSchedules = state.recSchedules.findIndex(
						(schedule) => schedule.id === updatedSchedule.id,
					);
					const indexInTodaySchedules = state.todaySchedules.findIndex(
						(schedule) => schedule.id === updatedSchedule.id,
					);
					const indexInSchedulesForTheWeek =
						state.schedulesForTheWeek.findIndex(
							(schedule) => schedule.id === updatedSchedule.id,
						);
					if (indexInNonRecSchedules !== -1) {
						state.nonRecSchedules.splice(indexInNonRecSchedules, 1);
					}
					if (indexInRecSchedules !== -1) {
						state.recSchedules.splice(indexInRecSchedules, 1);
					}
					if (indexInTodaySchedules !== -1) {
						state.todaySchedules.splice(indexInTodaySchedules, 1);
					}
					if (indexInSchedulesForTheWeek !== -1) {
						state.schedulesForTheWeek.splice(indexInSchedulesForTheWeek, 1);
					}

					if (updatedSchedule.recurrence) {
						state.recSchedules.push(updatedSchedule);
					} else {
						state.nonRecSchedules.push(updatedSchedule);
					}
					// 오늘 날짜인 경우
					if (
						checkIsTodaySchedule(
							updatedSchedule.startDateTime,
							updatedSchedule.endDateTime,
						)
					) {
						state.todaySchedules.push(updatedSchedule);
						state.todaySchedules.sort(
							(prev, curr) =>
								new Date(prev.startDateTime) - new Date(curr.startDateTime),
						);
					}
					// 일주일 내 일정인 경우(오늘 일정과 겹칠 수 있음)
					if (
						checkIsScheduleForTheWeek(
							updatedSchedule.startDateTime,
							updatedSchedule.endDateTime,
						)
					) {
						state.schedulesForTheWeek.push(updatedSchedule);
						state.schedulesForTheWeek.sort(
							(prev, curr) =>
								new Date(prev.startDateTime) - new Date(curr.startDateTime),
						);
					}
				},
			)
			.addCase(updateSchedule.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
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
