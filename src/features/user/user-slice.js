import { createSlice } from "@reduxjs/toolkit";

import { inqueryUserGroup } from "./user-service";

const initialState = {
	userGroupList: [],
	isUserGroupFetching: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(inqueryUserGroup.pending, (state) => {
				state.isUserGroupFetching = true;
			})
			.addCase(inqueryUserGroup.fulfilled, (state, { payload }) => {
				state.isUserGroupFetching = false;
				state.userGroupList = payload;
			})
			.addCase(inqueryUserGroup.rejected, (state) => {
				state.isUserGroupFetching = false;
			});
	},
});

export default userSlice.reducer;
