import { createSlice } from "@reduxjs/toolkit";

import { inqueryUserGroup } from "./user-service";

const initialState = {
	userGroupList: [],
	isLoading: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		inqueryGroup: (state, { payload }) => {
			state.userGroupList = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(inqueryUserGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(inqueryUserGroup.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.userGroupList = payload;
			})
			.addCase(inqueryUserGroup.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const { inqueryGroup } = userSlice.actions;

export default userSlice.reducer;
