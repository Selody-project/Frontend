import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "@/components/Base/BaseAxios.js";

export const createGroup = createAsyncThunk(
	"group/createGroup",
	async (groupName, thunkAPI) => {
		try {
			const response = await customFetch.post("/api/group", {
				name: groupName,
			});
			if (response.status !== 200) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			} else {
				return thunkAPI.rejectWithValue(error.message);
			}
		}
	},
);

export const getGroupList = createAsyncThunk(
	"group/getGroupList",
	async (_, thunkAPI) => {
		try {
			const response = await customFetch.get("/api/group");
			if (response.status !== 200) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			} else {
				return thunkAPI.rejectWithValue(error.message);
			}
		}
	},
);

export const deleteGroup = createAsyncThunk(
	"group/deleteGroup",
	async (groupId, thunkAPI) => {
		try {
			const response = await customFetch.get(`/api/group/${groupId}`);
			if (response.status !== 204) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			} else {
				return thunkAPI.rejectWithValue(error.message);
			}
		}
	},
);

export const updateGroup = createAsyncThunk(
	"group/updateGroup",
	async (groupLeader, thunkAPI) => {
		try {
			const response = await customFetch.patch(`/api/group/${groupId}`, {
				newLeaderId: groupLeader,
			});
			if (response.status !== 200) {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error.response.data);
			} else {
				return thunkAPI.rejectWithValue(error.message);
			}
		}
	},
);
