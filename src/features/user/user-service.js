import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Ui/BaseAxios";

export const inqueryUserGroup = createAsyncThunk(
	"user/inqueryUserGroup",
	async (thunkAPI) => {
		try {
			const response = await customFetch.get("/api/user/group");
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
