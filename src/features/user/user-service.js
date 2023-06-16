import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import customFetch from "@/components/Base/BaseAxios";

export const signup = createAsyncThunk(
	"user/signup",
	async ({ email, nickname, password, navigate }, thunkAPI) => {
		try {
			const response = await axios.post(`/back/api/auth/join`, {
				email,
				nickname,
				password,
			});
			if (response.statusText !== "OK") {
				throw response.data;
			}

			// navigate("/");

			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

export const login = createAsyncThunk(
	"user/login",
	async ({ email, password, navigate }, thunkAPI) => {
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
	async ({ access_Token, navigate }, thunkAPI) => {
		try {
			const response = await customFetch.post("/api/auth/naver", {
				accessToken: access_Token,
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
	async (googleInfo, thunkAPI) => {
		try {
			const response = await customFetch.post("/api/auth/google", {
				accessToken: googleInfo.credential,
			});

			if (response.statusText !== "OK") {
				throw response.data;
			}

			return response.data;
		} catch (error) {
			console.log(error.message);
			return;
		}
	},
);

export const logout = createAsyncThunk(
	"user/logout",
	async ({ navigate }, thunkAPI) => {
		try {
			const response = await customFetch.delete("/api/auth/logout");

			if (response.status !== 200) {
				throw response.data;
			}
			navigate("/login");

			return response.data;
		} catch (error) {
			console.log(error.message);
			return;
		}
	},
);

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
			console.log(error.message);
			return;
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
