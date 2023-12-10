import { toast } from "react-toastify";

import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit";

import {
	getGroupAllPosts,
	getGroupPosts,
	getUserGroupPosts,
	likeGroupPost,
	cancelLikeGroupPost,
	deleteGroupPost,
} from "./post-service";

const initialState = {
	groupPost: null,
	allGroupPosts: [],
	userGroupPost: [],
	lastRecordId: 0,
	isLoading: true,
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
					getGroupAllPosts.pending,
					getGroupPosts.pending,
					getUserGroupPosts.pending,
					likeGroupPost.pending,
					cancelLikeGroupPost.pending,
					deleteGroupPost.pending,
				),
				(state) => {
					state.isLoading = true;
				},
			)
			.addMatcher(
				isAnyOf(
					getGroupAllPosts.rejected,
					getGroupPosts.rejected,
					getUserGroupPosts.rejected,
					likeGroupPost.rejected,
					cancelLikeGroupPost.rejected,
					deleteGroupPost.pending,
				),
				(state) => {
					state.isLoading = false;
				},
			)
			.addMatcher(isAllOf(getGroupAllPosts.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				payload.feed.forEach((postInfo) => {
					state.allGroupPosts.push(postInfo);
				});
				state.lastRecordId = payload.feed[payload.feed.length - 1].postId;
				state.isEnd = payload.isEnd;
			})
			.addMatcher(isAllOf(getGroupPosts.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.groupPost = payload;
			})
			.addMatcher(
				isAllOf(getUserGroupPosts.fulfilled),
				(state, { payload }) => {
					state.isLoading = false;
					payload.feed.forEach((postInfo) => {
						state.userGroupPost.push(postInfo);
					});
					state.lastRecordId = payload.feed[payload.feed.length - 1].postId;
					state.isEnd = payload.isEnd;
				},
			)
			.addMatcher(isAllOf(likeGroupPost.fulfilled), (state) => {
				state.isLoading = false;
			})
			.addMatcher(isAllOf(cancelLikeGroupPost.fulfilled), (state) => {
				state.isLoading = false;
			})
			.addMatcher(isAllOf(deleteGroupPost.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("글을 삭제하는데 성공하였습니다.");
			});
	},
});

export default postSlice.reducer;
