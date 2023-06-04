import { createAsyncThunk } from "@reduxjs/toolkit";
import convertToUTC from "@/utils/convertToUTC.js";
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
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);
