import { createAsyncThunk } from "@reduxjs/toolkit";

import commonThunk from "../commonThunk";

export const getGroupPost = createAsyncThunk(
	"post/getGroupPost",
	async ({ groupId, postId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "GET",
				url: `/api/group/${groupId}/post/${postId}`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const getUserGroupPost = createAsyncThunk(
	"post/getUserGroupPost",
	async (recordId, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "GET",
				url: `/api/user/post?last_record_id=${recordId}`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);
