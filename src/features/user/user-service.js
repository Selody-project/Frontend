import { createAsyncThunk } from "@reduxjs/toolkit";

import commonThunk from "../commonThunk";

export const inqueryUserGroup = createAsyncThunk(
	"user/inqueryUserGroup",
	async (thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: "/api/user/group" },
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
			thunkAPI,
		);

		return data;
	},
);
