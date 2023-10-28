/* eslint-disable camelcase */
import { createAsyncThunk } from "@reduxjs/toolkit";

import customFetch from "@/components/Base/BaseAxios";

export const validateDuplication = createAsyncThunk(
	"user/validateDuplication",
	async ({ type, targetValue }, thunkAPI) => {
		try {
			const response = await customFetch.post("/api/auth/join", {
				[type]: targetValue,
			});
			if (response.status === 409) {
				throw response.data;
			}
			return response.status;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const signup = createAsyncThunk(
	"user/signup",
	async ({ email, nickname, password }, thunkAPI) => {
		try {
			const response = await customFetch.post(`/api/auth/join`, {
				email,
				nickname,
				password,
			});
			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const login = createAsyncThunk(
	"user/login",
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await customFetch.post(`/api/auth/login`, {
				email,
				password,
			});

			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const naverLogin = createAsyncThunk(
	"user/naverLogin",
	async ({ access_token }, thunkAPI) => {
		try {
			const response = await customFetch.post("/api/auth/naver", {
				access_token,
			});

			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const googleLogin = createAsyncThunk(
	"user/googleLogin",
	async ({ access_token }, thunkAPI) => {
		try {
			const response = await customFetch.post("/api/auth/google", {
				access_token,
			});

			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
	try {
		const response = await customFetch.delete("/api/auth/logout");

		if (response.status !== 200) {
			throw response.data;
		}

		localStorage.removeItem("com.naver.nid.access_token");
		localStorage.removeItem("com.naver.nid.oauth.state_token");
		return response.status;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const getCurrentUser = createAsyncThunk(
	"user/getCurrentUser",
	async (_, thunkAPI) => {
		try {
			const response = await customFetch("/api/auth/token/verify");

			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const updateUserProfile = createAsyncThunk(
	"user/updateUserProfile",
	async ({ nickname }, thunkAPI) => {
		try {
			const response = await customFetch.patch(`/api/user/profile`, {
				nickname,
			});

			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const updateUserPassword = createAsyncThunk(
	"user/updateUserPassword",
	async ({ password }, thunkAPI) => {
		try {
			const response = await customFetch.patch(`/api/user/profile/password`, {
				password,
			});

			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
