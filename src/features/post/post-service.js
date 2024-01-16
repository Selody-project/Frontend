import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Ui/BaseAxios";

export const getGroupPost = createAsyncThunk(
	"post/getGroupPost",
	async ({ groupId, postId }, thunkAPI) => {
		try {
			const response = await customFetch.get(
				`/api/group/${groupId}/post/${postId}`,
			);
			if (response.status !== 200) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const getUserGroupPost = createAsyncThunk(
	"post/getUserGroupPost",
	async (recordId, thunkAPI) => {
		try {
			const response = await customFetch.get(`/api/user/feed/${recordId}`);
			if (response.status !== 200) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
