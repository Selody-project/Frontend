import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

import {
	createInviteLink,
	getInvitation,
	groupJoin,
} from "./group-invite-service.js";

const initialState = {
	searchGroup: null,
	inviteCode: "",
	inviteExp: null,
};

const groupSlice = createSlice({
	name: "groupInvite",
	initialState,
	reducers: {},
	extraReducers: (bulider) => {
		bulider
			.addCase(createInviteLink.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createInviteLink.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.inviteCode = payload.inviteCode;
				state.inviteExp = payload.exp;
			})
			.addCase(createInviteLink.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getInvitation.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getInvitation.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.searchGroup = payload.group;
			})
			.addCase(getInvitation.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(groupJoin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(groupJoin.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹에 참여하는데 성공하였습니다.");
			})
			.addCase(groupJoin.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export default groupSlice.reducer;
