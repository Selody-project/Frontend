import { toast } from "react-toastify";

import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit";

import {
	getGroupAllPost,
	getGroupPost,
	getUserGroupPost,
	likeGroupPost,
	dislikeGroupPost,
	deleteGroupPost,
} from "./post-service";

const initialState = {
	groupPost: null,
	allGroupPost: [],
	userGroupPost: [],
	lastRecordId: 0,
	isLoading: false,
	isEnd: false,
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {},
	extraReducers: (bulider) => {
		bulider
			.addMatcher(
				isAnyOf(
					getGroupAllPost.pending,
					getGroupPost.pending,
					getUserGroupPost.pending,
					likeGroupPost.pending,
					dislikeGroupPost.pending,
					deleteGroupPost.pending,
				),
				(state) => {
					state.isLoading = true;
				},
			)
			.addMatcher(
				isAnyOf(
					getGroupAllPost.rejected,
					getGroupPost.rejected,
					getUserGroupPost.rejected,
					likeGroupPost.rejected,
					dislikeGroupPost.rejected,
					deleteGroupPost.pending,
				),
				(state) => {
					state.isLoading = false;
				},
			)
			.addMatcher(isAllOf(getGroupAllPost.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				payload.feed.forEach((postInfo) => {
					state.allGroupPost.push(postInfo);
				});
				state.lastRecordId = payload.feed[payload.feed.length - 1].postId;
				state.isEnd = payload.isEnd;
			})
			.addMatcher(isAllOf(getGroupPost.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.groupPost = payload;
			})
			.addMatcher(isAllOf(getUserGroupPost.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				payload.feed.forEach((postInfo) => {
					state.userGroupPost.push(postInfo);
				});
				state.lastRecordId = payload.feed[payload.feed.length - 1].postId;
				state.isEnd = payload.isEnd;
			})
			.addMatcher(isAllOf(likeGroupPost.fulfilled), (state) => {
				state.isLoading = false;
			})
			.addMatcher(isAllOf(dislikeGroupPost.fulfilled), (state) => {
				state.isLoading = false;
			})
			.addMatcher(isAllOf(deleteGroupPost.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("글을 삭제하는데 성공하였습니다.");
			});
	},
});

export default postSlice.reducer;
