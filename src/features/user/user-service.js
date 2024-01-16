import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Ui/BaseAxios";

const commonThunk = async (params, successCode, thunkAPI) => {
	try {
		const response = await customFetch.request(params);
		if (response.status !== successCode) {
			throw response.data;
		}
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
};

export const inqueryUserGroup = createAsyncThunk(
	"user/inqueryUserGroup",
	async (thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: "/api/user/group" },
			200,
			thunkAPI,
		);

		return data;
	},
);

export const inqueryRequestUserGroup = createAsyncThunk(
	"user/inqueryRequestUserGroup",
	async (thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: "/api/user/group/pending" },
			200,
			thunkAPI,
		);

		return data;
	},
);
