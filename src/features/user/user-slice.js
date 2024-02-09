import { toast } from "react-toastify";

import { createSlice, isAnyOf, isAllOf } from "@reduxjs/toolkit";

import { getUserGroups, getRequestUserGroups } from "./user-service";
import { createGroup } from "../group/group-service";

const initialState = {
	userGroupList: [],
	userRequestGroupList: [],
	isUserGroupFetching: true,
	isRequestUserGroupFetching: true,
	isLoading: false,
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
			)
			.addMatcher(isAllOf(createGroup.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.userGroupList.push(payload);
				toast.success("그룹 생성에 성공하셨습니다!");
			});
	},
});

export default userSlice.reducer;
