import { createAsyncThunk } from "@reduxjs/toolkit";

import commonThunk from "../commonThunk";

export const createGroup = createAsyncThunk(
	"group/createGroup",
	async (groupName, thunkAPI) => {
		const response = await commonThunk(
			{
				method: "POST",
				url: "/api/group",
				data: { name: groupName },
				successCode: 200,
			},
			thunkAPI,
		);
		return response;
	},
);

export const getGroupList = createAsyncThunk(
	"group/getGroupList",
	async (_, thunkAPI) => {
		const response = await commonThunk(
			{
				method: "GET",
				url: "/api/group",
				successCode: 200,
			},
			thunkAPI,
		);
		return response;
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
