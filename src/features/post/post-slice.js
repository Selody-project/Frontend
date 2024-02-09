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
	allGroupPostslastRecordId: 0,
	myGroupPostslastRecordId: 0,
	isLoading: true,
	isEnd: false,
	isEmpty: false,
	allGroupPostsIsEnd: false,
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		resetAllGroupPosts: (state) => {
			state.allGroupPosts = [];
			state.allGroupPostslastRecordId = 0;
		},
	},
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
				if (payload.feed.length === 0) {
					state.isEmpty = true;
				}

				state.allGroupPosts = [...state.allGroupPosts, ...payload.feed];
				state.allGroupPostsIsEnd = payload.isEnd;

				if (payload.feed.length > 0) {
					state.allGroupPostslastRecordId =
						payload.feed[payload.feed.length - 1].postId;
				}
			})
			.addMatcher(isAllOf(getGroupPosts.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.currentGroupPost = payload;
			})
			.addMatcher(isAllOf(getMyGroupPosts.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.myGroupPosts = [...state.myGroupPosts, ...payload.feed];
				state.isEnd = payload.isEnd;

				if (payload.feed.length > 0) {
					state.myGroupPostslastRecordId =
						payload.feed[payload.feed.length - 1].postId;
				}

				if (payload.isEnd) {
					state.isEnd = false;
				}
			})
			.addMatcher(isAllOf(likeGroupPost.fulfilled), (state) => {
				state.isLoading = false;
			})
			.addMatcher(isAllOf(cancelLikeGroupPost.fulfilled), (state) => {
				state.isLoading = false;
			})
			.addMatcher(
				isAllOf(deleteGroupPost.fulfilled),
				(state, { meta: { arg: id } }) => {
					state.isLoading = false;
					toast.success("글을 삭제하는데 성공하였습니다.");
					state.allGroupPosts = state.allGroupPosts.filter(
						(prev) => prev.postId !== id.postId,
					);
					state.myGroupPosts = state.myGroupPosts.filter(
						(prev) => prev.postId !== id.postId,
					);
				},
			);
	},
});

export const { resetAllGroupPosts } = postSlice.actions;

export default postSlice.reducer;
