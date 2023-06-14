import { createAsyncThunk } from "@reduxjs/toolkit";
import convertToUTC, {
	generateEndDateTime,
	generateStartDateTime,
} from "@/utils/convertToUTC.js";
import customFetch from "@/components/Base/BaseAxios.js";

export const createSchedule = createAsyncThunk(
	"schedule/createSchedule",
	async (schedule, thunkAPI) => {
		const {
			title,
			details,
			startDate,
			endDate,
			startTime,
			endTime,
			repeat,
			notification,
		} = schedule;

		const startDateTime = convertToUTC(startDate, startTime);
		const endDateTime = convertToUTC(endDate, endTime);

		try {
			const response = await customFetch.post(`/api/user/calendar`, {
				title,
				content: details,
				startDateTime,
				endDateTime,
				freq: repeat,
				recurrence: 0,
			});
			if (response.status !== 201) {
				throw response.data;
			}
			thunkAPI.dispatch(getSchedule());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const getSchedule = createAsyncThunk(
	"schedule/getSchedule",
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const month = state.schedule.month;
		const year = state.schedule.year;

		const startDateTime = generateStartDateTime(year, month);
		const endDateTime = generateEndDateTime(year, month);

		try {
			const response = await customFetch.get(
				`/api/user/calendar?startDateTime=${startDateTime.replace(
					".000Z",
					"",
				)}&endDateTime=${endDateTime.replace(".000Z", "")}`,
			);
			if (response.status !== 200) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
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
			thunkAPI.dispatch(getSchedule());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const updateSchedule = createAsyncThunk(
	"schedule/updateSchedule",
	async ({ schedule, id }, thunkAPI) => {
		console.log(schedule);
		const {
			title,
			details,
			startDate,
			endDate,
			startTime,
			endTime,
			repeat,
			notification,
		} = schedule;

		const startDateTime = convertToUTC(startDate, startTime);
		const endDateTime = convertToUTC(endDate, endTime);

		try {
			const response = await customFetch.put(`/api/user/calendar/${id}`, {
				title,
				content: details,
				startDateTime,
				endDateTime,
				freq: repeat,
				recurrence: 0,
			});
			if (response.status !== 201) {
				throw response.data;
			}
			thunkAPI.dispatch(getSchedule());
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);
