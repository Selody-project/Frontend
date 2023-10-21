import { createSlice, isAnyOf, isAllOf } from "@reduxjs/toolkit";

import { inqueryUserGroup, inqueryRequestUserGroup } from "./user-service";

const initialState = {
	userGroupList: [],
	userRequestGroupList: [],
	isUserGroupFetching: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				isAnyOf(inqueryUserGroup.pending, inqueryRequestUserGroup),
				(state) => {
					state.isUserGroupFetching = true;
				},
			)
			.addMatcher(
				isAnyOf(inqueryUserGroup.rejected, inqueryRequestUserGroup.rejected),
				(state) => {
					state.isUserGroupFetching = false;
				},
			)
			.addMatcher(isAllOf(inqueryUserGroup.fulfilled), (state, { payload }) => {
				state.isUserGroupFetching = false;
				state.userGroupList = payload;
			})
			.addMatcher(
				isAllOf(inqueryRequestUserGroup.fulfilled),
				(state, { payload }) => {
					state.isUserGroupFetching = false;
					state.userRequestGroupList = payload;
				},
			);
	},
});

export default userSlice.reducer;
