import { createAsyncThunk } from "@reduxjs/toolkit";

import commonThunk from "../commonThunk";

export const getUserGroups = createAsyncThunk(
	"user/getUserGroups",
	async (thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: "/api/user/group", successCode: 200 },
			thunkAPI,
		);

		return data;
	},
);

export const getRequestUserGroups = createAsyncThunk(
	"user/getRequestUserGroups",
	async (thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: "/api/user/group/pending", successCode: 200 },
			thunkAPI,
		);

		return data;
	},
);
