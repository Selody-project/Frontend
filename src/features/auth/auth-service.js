/* eslint-disable camelcase */
import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Base/BaseAxios";

import commonThunk from "../commonThunk";

export const validateDuplication = createAsyncThunk(
	"user/validateDuplication",
	async ({ type, targetValue }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `/api/auth/join`,
				data: { [type]: targetValue },
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const signup = createAsyncThunk(
	"user/signup",
	async ({ email, nickname, password }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `/api/auth/join`,
				data: { email, nickname, password },
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const login = createAsyncThunk(
	"user/login",
	async ({ email, password }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `/api/auth/login`,
				data: { email, password },
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const naverLogin = createAsyncThunk(
	"user/naverLogin",
	async ({ access_token }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `/api/auth/naver`,
				data: { access_token },
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const googleLogin = createAsyncThunk(
	"user/googleLogin",
	async ({ access_token }, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "POST",
				url: `/api/auth/google`,
				data: { access_token },
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
	const data = await commonThunk(
		{
			method: "DELETE",
			url: `/api/auth/logout`,
			successCode: 200,
		},
		thunkAPI,
	);
	localStorage.removeItem("com.naver.nid.access_token");
	localStorage.removeItem("com.naver.nid.oauth.state_token");
	return data;
});

export const getCurrentUser = createAsyncThunk(
	"user/getCurrentUser",
	async (_, thunkAPI) => {
		const data = await commonThunk(
			{
				method: "GET",
				url: `/api/auth/token/refresh`,
				successCode: 200,
			},
			thunkAPI,
		);
		return data;
	},
);

export const updateUserProfile = createAsyncThunk(
	"user/updateUserProfile",
	async (formdata, thunkAPI) => {
		try {
			const response = await customFetch.patch(`/api/user/profile`, formdata, {
				headers: { "Content-Type": "multipart/form-data" },
			});

			if (response.statusText !== "OK") {
				throw response.data;
			}
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const updateUserPassword = createAsyncThunk(
	"user/updateUserPassword",
	async (data, thunkAPI) => {
		try {
			const response = await customFetch.patch(
				`/api/user/profile/password`,
				data,
			);

			if (response.status !== 200) {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const withdrawMembership = createAsyncThunk(
	"user/withdrawal",
	async (_, thunkAPI) => {
		try {
			const response = await customFetch.delete(`/api/auth/withdrawal`);

			if (response.status !== 204) {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
