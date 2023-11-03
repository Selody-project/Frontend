import { createAsyncThunk } from "@reduxjs/toolkit";

import { VIEW_TYPE } from "@/constants/calendarConstants";
import commonThunk from "@/features/commonThunk";
import { getFirstDateOfWeek } from "@/utils/calendarUtils";
import { convertScheduleFormValueToData } from "@/utils/convertSchedule";

export const getTodaySchedules = createAsyncThunk(
	"schedule/getTodaySchedules",
	async (_, thunkAPI) => {
		try {
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			const startDateTime = today.toISOString();
			const endDateTime = new Date(
				today.setDate(today.getDate() + 1),
			).toISOString();

			const data = await commonThunk(
				{
					method: "GET",
					url: "/api/user/calendar",
					params: {
						startDateTime,
						endDateTime,
					},
					successCode: 200,
				},
				thunkAPI,
			);
			return data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const getSchedulesForTheWeek = createAsyncThunk(
	"schedule/getSchedulesForTheWeek",
	async (_, thunkAPI) => {
		try {
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			const startDateTime = new Date(
				today.setDate(today.getDate() + 1),
			).toISOString();
			const endDateTime = new Date(
				today.setDate(today.getDate() + 6),
			).toISOString();

			const data = await commonThunk(
				{
					method: "GET",
					url: "/api/user/calendar",
					params: {
						startDateTime,
						endDateTime,
					},
					successCode: 200,
				},
				thunkAPI,
			);

			return data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const getSchedulesSummary = createAsyncThunk(
	"schedule/getSchedulesSummary",
	async ({ isGroup, groupId }, thunkAPI) => {
		const state = thunkAPI.getState();
		const { year, month, week, currentView } = state.schedule;
		const firstDateOfWeek = getFirstDateOfWeek(year, month, week);
		const doesWeekContainNextMonth =
			getFirstDateOfWeek(year, month, week + 1) > 1;
		const doesWeekContainNextYear = doesWeekContainNextMonth && year === 12;

		const startDateTime = new Date(
			year,
			month - 1,
			currentView === VIEW_TYPE.DAY_GRID_MONTH ? undefined : firstDateOfWeek,
		).toISOString();
		const endDateTime = new Date(
			doesWeekContainNextYear ? year + 1 : year,
			// eslint-disable-next-line no-nested-ternary
			doesWeekContainNextYear
				? 1
				: doesWeekContainNextMonth
				? month
				: month - 1,
			// eslint-disable-next-line no-nested-ternary
			currentView === VIEW_TYPE.DAY_GRID_MONTH
				? undefined
				: doesWeekContainNextMonth
				? 1
				: firstDateOfWeek + 6,
		).toISOString();

		if ((isGroup && !groupId) || (!isGroup && groupId))
			throw new Error(
				"isGroup일 때는 groupId가 필수이며, isGroup이 아닐 때는 groupId가 필요 없습니다.",
			);

		try {
			const data = await commonThunk(
				{
					method: "GET",
					url: `/api/${
						!isGroup ? "user" : `group/${groupId}`
					}/calendar/summary`,
					params: {
						startDateTime,
						endDateTime,
					},
					successCode: 200,
				},
				thunkAPI,
			);
			return data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const createSchedule = createAsyncThunk(
	"schedule/createSchedule",
	async (schedule, thunkAPI) => {
		try {
			const data = await commonThunk(
				{
					method: "POST",
					url: `/api/user/calendar`,
					data: convertScheduleFormValueToData(schedule),
					successCode: 201,
				},
				thunkAPI,
			);
			return data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const deleteSchedule = createAsyncThunk(
	"schedule/deleteSchedule",
	async (id, thunkAPI) => {
		try {
			const data = await commonThunk(
				{ method: "DELETE", url: `/api/user/calendar/${id}`, successCode: 204 },
				thunkAPI,
			);
			return data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const updateSchedule = createAsyncThunk(
	"schedule/updateSchedule",
	async ({ schedule, id }, thunkAPI) => {
		try {
			const data = await commonThunk(
				{
					method: "PUT",
					url: `/api/user/calendar/${id}`,
					data: convertScheduleFormValueToData(schedule),
					successCode: 201,
				},
				thunkAPI,
			);
			return data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
