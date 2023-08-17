import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Base/BaseAxios.js";

export const createInviteLink = createAsyncThunk(
	"groupInvite/createInviteLink",
	async (groupId, thunkAPI) => {
		try {
			const response = await customFetch.post(
				`/api/group/${groupId}/invite-link`,
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

export const getInvitation = createAsyncThunk(
	"groupInvite/getInvitation",
	async (inviteCode, thunkAPI) => {
		try {
			const response = await customFetch.get(
				`/api/group/invite-link/${inviteCode}`,
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

export const groupJoin = createAsyncThunk(
	"groupInvite/groupJoin",
	async (inviteCode, thunkAPI) => {
		try {
			const response = await customFetch.post(`/api/group/join/${inviteCode}`);
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
