import { createSlice } from "@reduxjs/toolkit";

import { getGroupPost, getUserGroupPost } from "./post-service";

const initialState = {
	groupPost: null,
	userGroupPost: null,
	isLoading: false,
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {},
	extraReducers: (bulider) => {
		bulider
			.addCase(getGroupPost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGroupPost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupPost = payload;
			})
			.addCase(getGroupPost.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getUserGroupPost.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserGroupPost.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.userGroupPost = payload;
			})
			.addCase(getUserGroupPost.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export default postSlice.reducer;
