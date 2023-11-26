import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Base/BaseAxios";

import commonThunk from "../commonThunk";

export const deleteGroupMember = createAsyncThunk(
	"group/deleteGroupMember",
	async ({ groupId, userId }, thunkAPI) => {
		try {
			const response = await customFetch.delete(
				`api/group/${groupId}/members/${userId}`,
				{ groupId, userId },
			);
			if (response.status !== 204) {
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

export const rejectGroupJoin = createAsyncThunk(
	"group/rejectGroupJoin",
	async ({ groupId, userId }, thunkAPI) => {
		try {
			const response = await customFetch.post(
				`api/group/${groupId}/members/${userId}/reject`,
				{ groupId, userId },
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

export const approveGroupJoin = createAsyncThunk(
	"group/approveGroupJoin",
	async ({ groupId, userId }, thunkAPI) => {
		try {
			const response = await customFetch.post(
				`api/group/${groupId}/members/${userId}/approve`,
				{ groupId, userId },
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

export const getGroupRequestMemberList = createAsyncThunk(
	"group/getGroupRequestMemberList",
	async (groupId, thunkAPI) => {
		try {
			const response = await customFetch.get(
				`/api/group/${groupId}/members/request`,
				{
					groupId,
				},
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

export const getGroupInfo = createAsyncThunk(
	"group/getGroupInfo",
	async (groupId, thunkAPI) => {
		try {
			const response = await customFetch.get(`/api/group/${groupId}/info`, {
				groupId,
			});
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

export const getGroupInfoDetail = createAsyncThunk(
	"group/getGroupInfoDetail",
	async (groupId, thunkAPI) => {
		try {
			const response = await customFetch.get(`/api/group/${groupId}`, {
				groupId,
			});
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

export const createGroup = createAsyncThunk(
	"group/createGroup",
	async ({ groupName, groupDescription }, thunkAPI) => {
		try {
			const response = await customFetch.post("/api/group", {
				groupName,
				groupDescription,
			});
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

export const getGroupList = createAsyncThunk(
	"group/getGroupList",
	async (pageNum, thunkAPI) => {
		try {
			const response = await customFetch.get(`/api/group?page=${pageNum}`);
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

export const deleteGroup = createAsyncThunk(
	"group/deleteGroup",
	async (groupId, thunkAPI) => {
		const response = await commonThunk(
			{
				method: "DELETE",
				url: `/api/group/${groupId}`,
				successCode: 204,
			},
			thunkAPI,
		);
		return response;
	},
);

export const delegateGroup = createAsyncThunk(
	"group/delegateGroup",
	async ({ groupId, selectedMemberId }, thunkAPI) => {
		const response = await commonThunk(
			{
				method: "PATCH",
				url: `/api/group/${groupId}/members/${selectedMemberId}/access-level`,
				data: { access_level: "owner" },
				successCode: 204,
			},
			thunkAPI,
		);
		return response;
	},
);

export const updateGroup = createAsyncThunk(
	"group/updateGroup",
	async (groupId, groupLeader, thunkAPI) => {
		const response = await commonThunk(
			{
				method: "PATCH",
				url: `/api/group/${groupId}`,
				data: { newLeaderId: groupLeader },
				successCode: 200,
			},
			thunkAPI,
		);
		return response;
	},
);

export const leaveGroup = createAsyncThunk(
	"group/leaveGroup",
	async (groupId, thunkAPI) => {
		const response = await commonThunk(
			{
				method: "DELETE",
				url: `/api/user/group/${groupId}`,
				successCode: 204,
			},
			thunkAPI,
		);
		return response;
	},
);

export const changeGroupOption = createAsyncThunk(
	"group/changeOption",
	async ({ groupId, type, status }, thunkAPI) => {
		const response = await commonThunk(
			{
				method: "PATCH",
				url: `/api/user/settings/${groupId}`,
				data: { [type]: status },
				successCode: 200,
			},
			thunkAPI,
		);
		return response;
	},
);
