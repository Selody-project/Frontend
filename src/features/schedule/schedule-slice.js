import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

import { VIEW_TYPE } from "@/constants/calendarConstants.js";
import { getCurrentWeek } from "@/utils/calendarUtils.js";

import {
	createSchedule,
	getSchedulesSummary,
	getSchedulesForTheWeek,
	getTodaySchedules,
	updateSchedule,
	deleteSchedule,
} from "./schedule-service.js";

const initialState = {
	calendarSchedules: [],
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
				toast.loading("업로드 중");
				state.isLoading = true;
			})
			.addCase(
				createSchedule.fulfilled,
				(
					state,
					{ payload: { scheduleSummary, todaySchedules, schedulesForTheWeek } },
				) => {
					toast.dismiss();
					toast.success("일정이 추가되었습니다");
					state.calendarSchedules.push(scheduleSummary);
					if (todaySchedules.length > 0) {
						state.todaySchedules = state.todaySchedules.concat(todaySchedules);
						state.todaySchedules.sort(
							(prev, curr) =>
								new Date(prev.startDateTime) - new Date(curr.startDateTime),
						);
					}
					if (schedulesForTheWeek.length > 0) {
						state.schedulesForTheWeek =
							state.schedulesForTheWeek.concat(schedulesForTheWeek);
						state.schedulesForTheWeek.sort(
							(prev, curr) =>
								new Date(prev.startDateTime) - new Date(curr.startDateTime),
						);
					}
					state.isLoading = false;
				},
			)
			.addCase(createSchedule.rejected, (state) => {
				toast.dismiss();
				toast.error("일정 추가에 실패했습니다.");
				state.isLoading = false;
			})
			.addCase(getTodaySchedules.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTodaySchedules.fulfilled, (state, { payload }) => {
				const { schedules } = payload;
				state.isLoading = false;
				state.todaySchedules = schedules;
			})
			.addCase(getTodaySchedules.rejected, (state) => {
				toast.error("오늘 일정을 불러오는 데 실패했습니다.");
				state.isLoading = false;
			})
			.addCase(getSchedulesForTheWeek.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSchedulesForTheWeek.fulfilled, (state, { payload }) => {
				const { schedules } = payload;
				state.isLoading = false;
				state.schedulesForTheWeek = schedules;
			})
			.addCase(getSchedulesForTheWeek.rejected, (state) => {
				toast.error("예정된 일정을 불러오는 데 실패했습니다.");
				state.isLoading = false;
			})
			.addCase(getSchedulesSummary.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSchedulesSummary.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.calendarSchedules = payload.schedules;
			})
			.addCase(getSchedulesSummary.rejected, (state) => {
				toast.error("달력 일정을 불러오는 데 실패했습니다.");
				state.isLoading = false;
			})
			.addCase(updateSchedule.pending, (state) => {
				toast.loading("수정 중");
				state.isLoading = true;
			})
			.addCase(
				updateSchedule.fulfilled,
				(
					state,
					{ payload: { scheduleSummary, todaySchedules, schedulesForTheWeek } },
				) => {
					toast.dismiss();
					toast.success("일정이 수정되었습니다");
					state.calendarSchedules = state.calendarSchedules.filter(
						(prev) => prev.id !== scheduleSummary.id,
					);
					state.todaySchedules = state.todaySchedules.filter(
						(schedule) => schedule.id !== scheduleSummary.id,
					);
					state.schedulesForTheWeek = state.schedulesForTheWeek.filter(
						(schedule) => schedule.id !== scheduleSummary.id,
					);
					state.calendarSchedules.push(scheduleSummary);
					if (todaySchedules.length > 0) {
						state.todaySchedules = state.todaySchedules.concat(todaySchedules);
						state.todaySchedules.sort(
							(prev, curr) =>
								new Date(prev.startDateTime) - new Date(curr.startDateTime),
						);
					}
					if (schedulesForTheWeek.length > 0) {
						state.schedulesForTheWeek =
							state.schedulesForTheWeek.concat(schedulesForTheWeek);
						state.schedulesForTheWeek.sort(
							(prev, curr) =>
								new Date(prev.startDateTime) - new Date(curr.startDateTime),
						);
					}
				},
			)
			.addCase(updateSchedule.rejected, (state) => {
				toast.dismiss();
				toast.error("일정 수정에 실패했습니다.");
				state.isLoading = false;
			})
			.addCase(deleteSchedule.pending, (state) => {
				toast.loading("삭제 중");
				state.isLoading = true;
			})
			.addCase(deleteSchedule.fulfilled, (state, { meta: { arg: id } }) => {
				toast.dismiss();
				toast.success("일정이 삭제되었습니다");
				state.isLoading = false;
				state.calendarSchedules = state.calendarSchedules.filter(
					(prev) => prev.id !== id,
				);
				state.todaySchedules = state.todaySchedules.filter(
					(prev) => prev.id !== id,
				);
				state.schedulesForTheWeek = state.schedulesForTheWeek.filter(
					(prev) => prev.id !== id,
				);
			})
			.addCase(deleteSchedule.rejected, (state) => {
				toast.dismiss();
				toast.error("일정 삭제에 실패했습니다.");
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
