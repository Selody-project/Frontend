import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Base/BaseAxios.js";
import { VIEW_TYPE } from "@/constants/calendarConstants";
import { getFirstDateOfWeek } from "@/utils/calendarUtils";
import { convertScheduleFormValueToData } from "@/utils/convertSchedule";

export const getTodaySchedules = createAsyncThunk(
	"schedule/getTodaySchedules",
	async (_, thunkAPI) => {
		try {
			const today = new Date();
			const startDateTime = today.toISOString();
			const endDateTime = new Date(
				today.setDate(today.getDate() + 1),
			).toISOString();

			const response = await customFetch.get("/api/user/calendar", {
				params: {
					startDateTime,
					endDateTime,
				},
			});
			return response.data;
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
			const startDateTime = new Date(
				today.setDate(today.getDate() + 1),
			).toISOString();
			const endDateTime = new Date(
				today.setDate(today.getDate() + 6),
			).toISOString();

			const response = await customFetch.get("/api/user/calendar", {
				params: {
					startDateTime,
					endDateTime,
				},
			});
			return response.data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const getSchedules = createAsyncThunk(
	"schedule/getSchedules",
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
			const response = await customFetch.get(
				`/api/${!isGroup ? "user" : `group/${groupId}`}/calendar`,
				{
					params: {
						startDateTime,
						endDateTime,
					},
				},
			);
			if (response.status !== 200) {
				throw response.data;
			}

			return response.data;
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
			const response = await customFetch.post(
				`/api/user/calendar`,
				convertScheduleFormValueToData(schedule),
			);
			if (response.status !== 201) {
				throw response.data;
			}
			return response.data;
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
			const response = await customFetch.delete(`/api/user/calendar/${id}`);
			if (response.status !== 204) {
				throw response.data;
			}
			return response.data;
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
			const response = await customFetch.put(
				`/api/user/calendar/${id}`,
				convertScheduleFormValueToData(schedule),
			);
			if (response.status !== 201) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
