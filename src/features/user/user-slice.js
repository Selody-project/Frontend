import { createSlice } from "@reduxjs/toolkit";
import {
	signup,
	login,
	naverLogin,
	logout,
	getCurrentUser,
	googleLogin,
} from "./user-service.js";
import { toast } from "react-toastify";

const initialState = {
	user: null,
	isLoading: false,
	userLoading: true,
	menuOpen: false,
	token: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logoutHandler: (state) => {
			state.user = null;
			toast.success("로그아웃에 성공하셨습니다.");
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
			.addCase(signup.rejected, (state, payload) => {
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
			// google 로그인
			.addCase(googleLogin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(googleLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.nickname;
				toast.success(`안녕하세요! ${state.user}님`);
			})
			.addCase(googleLogin.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
				// toast.error(payload);
			})
			// 로그아웃
			.addCase(logout.pending, (state) => {
				state.userLoading = true;
			})
			.addCase(logout.fulfilled, (state, { payload }) => {
				state.userLoading = false;
				state.user = null;
				toast.success("로그아웃에 성공하였습니다.");
			})
			.addCase(logout.rejected, (state, { payload }) => {
				state.userLoading = false;
				console.log(payload);
			})
			// 유저 쿠키 토큰 확인
			.addCase(getCurrentUser.pending, (state) => {
				state.userLoading = true;
			})
			.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
				state.userLoading = false;
				state.user = payload?.user?.nickname;
			})
			.addCase(getCurrentUser.rejected, (state, { payload }) => {
				state.userLoading = false;
				console.log(payload);
			});
	},
});

export const { handleMenuToggle, logoutHandler } = userSlice.actions;

export default userSlice.reducer;
