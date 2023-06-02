import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const customFetch = axios.create({
	baseURL: "/back",
	withCredentials: true,
});

export const signup = createAsyncThunk(
	"user/signup",
	async ({ email, nickname, password, navigate }, thunkAPI) => {
		try {
			const response = await customFetch.post(`/api/auth/join`, {
				email,
				nickname,
				password,
			});
			if (response.statusText !== "OK") {
				throw response.data;
			}

			navigate("/");

			return response.data;
		} catch (error) {
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

			// navigate("/");

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

			navigate("/");

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
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
	async ({ name, passwd }, thunkAPI) => {
		try {
			const response = await customFetch.put(`/api/user/profile`, {
				nickname: name,
				password: passwd,
			});
			console.log("response: ", response);

			if (response.statusText !== "OK") {
				console.log("response.data실패: ", response.data);
				throw response.data;
			}

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);
