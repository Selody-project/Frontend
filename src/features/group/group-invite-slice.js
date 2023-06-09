import { createSlice } from "@reduxjs/toolkit";
import {
	createInviteLink,
	getInvitation,
	groupJoin,
} from "./group-invite-service.js";

const initialState = {
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
				toast.success("그룹초대 코드 생성에 성공하셨습니다!");
			})
			.addCase(createInviteLink.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			})
			.addCase(getInvitation.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getInvitation.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				// state.group = payload
			})
			.addCase(getInvitation.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			})
			.addCase(groupJoin.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(groupJoin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.success("그룹에 참여하는데 성공하였습니다.");
			})
			.addCase(groupJoin.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			});
	},
});

export default groupSlice.reducer;
