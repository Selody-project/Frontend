import { createSlice, isAnyOf, isAllOf } from "@reduxjs/toolkit";

import { getUserGroups, getRequestUserGroups } from "./user-service";

const initialState = {
	userGroupList: [],
	userRequestGroupList: [],
	isUserGroupFetching: true,
	isRequestUserGroupFetching: true,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				isAnyOf(getUserGroups.pending, getRequestUserGroups.pending),
				(state) => {
					state.isUserGroupFetching = true;
				},
			)
			.addMatcher(
				isAnyOf(getUserGroups.rejected, getRequestUserGroups.rejected),
				(state) => {
					state.isRequestUserGroupFetching = false;
				},
			)
			.addMatcher(isAllOf(getUserGroups.fulfilled), (state, { payload }) => {
				state.isUserGroupFetching = false;
				state.userGroupList = payload;
			})
			.addMatcher(
				isAllOf(getRequestUserGroups.fulfilled),
				(state, { payload }) => {
					state.isRequestUserGroupFetching = false;
					state.userRequestGroupList = payload;
				},
			);
	},
});

export default userSlice.reducer;
