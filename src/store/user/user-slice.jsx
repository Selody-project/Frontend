import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const customFetch = axios.create({
	baseURL: "/back",
	withCredentials: true,
});

const initialState = {
	user: null,
	isLoading: false,
	userLoading: true,
	menuOpen: false, // 메뉴 or 모달 같은 것들을 토글하기 위한 상태
	token: null,
};

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
			const response = await fetch("/back/api/auth/naver", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ accessToken: access_Token }),
			});

			if (!response.ok) {
				throw response;
			}

			navigate("/");

			const data = await response.json();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
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

			console.log("data: ", response.data);
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
				throw response.data;
			}

			toast.success("프로필이 성공적으로 업데이트되었습니다.");

			return response.data;
		} catch (error) {
			toast.error("프로필 업데이트 중 오류가 발생했습니다.");
			return thunkAPI.rejectWithValue(error.message);
		}
	},
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: (state) => {
			// (state.user = null), toast.success("로그아웃에 성공하셨습니다");
		},

		handleMenuToggle: (state) => {
			state.menuOpen = !state.menuOpen;
		},
	},
	extraReducers: (builder) => {
		builder
			// 회원가입
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signup.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
				state.user = payload.nickname;
				toast.success(`환영합니다! ${state.user}님`);
			})
			.addCase(signup.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
				toast.error(payload);
			})
			// 로그인
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
				state.user = payload.nickname;
				toast.success(`안녕하세요! ${state.user}님`);
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			})
			// naver 로그인
			.addCase(naverLogin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(naverLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.nickname;
				toast.success(`안녕하세요! ${state.user}님`);
			})
			.addCase(naverLogin.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
				// toast.error(payload);
			})
			// 유저 쿠키 토큰 확인
			.addCase(getCurrentUser.pending, (state) => {
				state.userLoading = true;
			})
			.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
				state.userLoading = false;
				state.user = payload?.exUser;
				console.log("state.user", state.user);
			})
			.addCase(getCurrentUser.rejected, (state, { payload }) => {
				state.userLoading = false;
				console.log(payload);
			})
			// Update user profile
			.addCase(updateUserProfile.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUserProfile.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.nickname;
			})
			.addCase(updateUserProfile.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload);
			});
	},
});

export const { handleMenuToggle } = userSlice.actions;

export default userSlice.reducer;
