/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
	signup,
	login,
	naverLogin,
	logout,
	getCurrentUser,
	googleLogin,
	updateUserProfile,
	updateUserPassword,
} from "./auth-service.js";

const initialState = {
	user: null,
	isLoading: false,
	userLoading: true,
	token: null,
	edit: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setEdit: (state, { payload }) => {
			state.edit = payload;
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
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			})
			// naver 로그인
			.addCase(naverLogin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(naverLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload;
			})
			.addCase(naverLogin.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			})
			// google 로그인
			.addCase(googleLogin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(googleLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload;
			})
			.addCase(googleLogin.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
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
				state.user = payload?.user;
			})
			.addCase(getCurrentUser.rejected, (state, { payload }) => {
				state.userLoading = false;
				console.log(payload);
			})
			// 유저 프로필 수정
			.addCase(updateUserProfile.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUserProfile.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload;
				toast.success("프로필이 수정되었습니다.");
			})
			.addCase(updateUserProfile.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
				toast.error(payload);
			})
			// 유저 비밀번호 수정
			.addCase(updateUserPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUserPassword.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.success("비밀번호가 수정되었습니다.");
			})
			.addCase(updateUserPassword.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
				toast.error(payload);
			});
	},
});

export const { setEdit } = authSlice.actions;

export default authSlice.reducer;
