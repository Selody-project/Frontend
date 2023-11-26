import { createAsyncThunk } from "@reduxjs/toolkit";

import commonThunk from "../commonThunk";

export const searchGroup = createAsyncThunk(
	"group/searchGroup",
	async ({ keyword, recordId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "GET",
				url: `api/group/search?keyword=${keyword}&last_record_id=${recordId}`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const createGroup = createAsyncThunk(
	"group/createGroup",
	async (formdata, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: "/api/group",
				data: formdata,
				headers: { "Content-Type": "multipart/form-data" },
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const getGroupList = createAsyncThunk(
	"group/getGroupList",
	async (recordId, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "GET",
				url: `/api/group/list?last_record_id=${recordId}`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const deleteGroupMember = createAsyncThunk(
	"group/deleteGroupMember",
	async ({ groupId, userId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "DELETE",
				url: `api/group/${groupId}/members/${userId}`,
				successCode: 204,
			},
			thunkAPI,
		);
		return data;
	},
);

export const rejectGroupJoin = createAsyncThunk(
	"group/rejectGroupJoin",
	async ({ groupId, userId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `api/group/${groupId}/members/${userId}/reject`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const approveGroupJoin = createAsyncThunk(
	"group/approveGroupJoin",
	async ({ groupId, userId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `api/group/${groupId}/members/${userId}/approve`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const getGroupRequestMemberList = createAsyncThunk(
	"group/getGroupRequestMemberList",
	async (groupId, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "GET",
				url: `/api/group/${groupId}/members/request`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const getGroupInfo = createAsyncThunk(
	"group/getGroupInfo",
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

export const cancelGroupJoin = createAsyncThunk(
	"group/cancelGroupJoin",
	async (groupId, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `/api/group/${groupId}/members/request`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);
