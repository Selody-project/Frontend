import { createAsyncThunk } from "@reduxjs/toolkit";

import commonThunk from "../commonThunk";

export const getGroupInfo = createAsyncThunk(
	"group/getGroupInfo",
	async (groupId, thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: `/api/group/${groupId}/info` },
			200,
			thunkAPI,
		);
		return data;
	},
);

export const deleteGroupMember = createAsyncThunk(
	"group/deleteGroupMember",
	async ({ groupId, userId }, thunkAPI) => {
		const data = await commonThunk(
			{ method: "DELETE", url: `api/group/${groupId}/members/${userId}` },
			204,
			thunkAPI,
		);
		return data;
	},
);

export const rejectGroupJoin = createAsyncThunk(
	"group/rejectGroupJoin",
	async ({ groupId, userId }, thunkAPI) => {
		const data = await commonThunk(
			{ method: "POST", url: `api/group/${groupId}/members/${userId}/reject` },
			200,
			thunkAPI,
		);
		return data;
	},
);

export const approveGroupJoin = createAsyncThunk(
	"group/approveGroupJoin",
	async ({ groupId, userId }, thunkAPI) => {
		const data = await commonThunk(
			{ method: "POST", url: `api/group/${groupId}/members/${userId}/approve` },
			200,
			thunkAPI,
		);
		return data;
	},
);

export const getGroupRequestMemberList = createAsyncThunk(
	"group/getGroupRequestMemberList",
	async (groupId, thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: `/api/group/${groupId}/members/request` },
			200,
			thunkAPI,
		);
		return data;
	},
);

export const getGroupInfoDetail = createAsyncThunk(
	"group/getGroupInfoDetail",
	async (groupId, thunkAPI) => {
		const data = await commonThunk(
			{ method: "GET", url: `/api/group/${groupId}` },
			200,
			thunkAPI,
		);
		return data;
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
