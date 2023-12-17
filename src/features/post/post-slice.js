import { toast } from "react-toastify";

import { createSlice, isAllOf, isAnyOf } from "@reduxjs/toolkit";

import {
	getGroupAllPosts,
	getGroupPosts,
	getMyGroupPosts,
	likeGroupPost,
	cancelLikeGroupPost,
	deleteGroupPost,
} from "./post-service";

const initialState = {
	currentGroupPost: null,
	allGroupPosts: [],
	myGroupPosts: [],
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
					getMyGroupPosts.pending,
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
					getMyGroupPosts.rejected,
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

				if (payload.feed.length > 0) {
					state.lastRecordId = payload.feed[payload.feed.length - 1].postId;
				}

				state.isEnd = payload.isEnd;
			})
			.addMatcher(isAllOf(getGroupPosts.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.currentGroupPost = payload;
			})
			.addMatcher(isAllOf(getMyGroupPosts.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				payload.feed.forEach((postInfo) => {
					state.myGroupPosts.push(postInfo);
				});

				if (payload.feed.length > 0) {
					state.lastRecordId = payload.feed[payload.feed.length - 1].postId;
				}

				state.isEnd = payload.isEnd;
			})
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
