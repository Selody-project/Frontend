import { createAsyncThunk } from "@reduxjs/toolkit";

import commonThunk from "../commonThunk";

export const getGroupAllPosts = createAsyncThunk(
	"post/getGroupAllPosts",
	async ({ groupId, lastRecordId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "GET",
				url: `/api/group/${groupId}/post?last_record_id=${lastRecordId}`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const getGroupPosts = createAsyncThunk(
	"post/getGroupPosts",
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

export const getMyGroupPosts = createAsyncThunk(
	"post/getMyGroupPosts",
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

export const likeGroupPost = createAsyncThunk(
	"post/likeGroupPost",
	async ({ postGroupId, postId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `/api/group/${postGroupId}/post/${postId}/like`,
				successCode: 201,
			},
			thunkAPI,
		);
		return data;
	},
);

export const cancelLikeGroupPost = createAsyncThunk(
	"post/cancelLikeGroupPost",
	async ({ postGroupId, postId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "DELETE",
				url: `/api/group/${postGroupId}/post/${postId}/like`,
				successCode: 204,
			},
			thunkAPI,
		);
		return data;
	},
);

export const deleteGroupPost = createAsyncThunk(
	"post/deleteGroupPost",
	async ({ postGroupId, postId }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "DELETE",
				url: `/api/group/${postGroupId}/post/${postId}`,
				successCode: 204,
			},
			thunkAPI,
		);
		return data;
	},
);
