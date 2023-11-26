import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

import {
	createGroup,
	deleteGroup,
	getGroupList,
	updateGroup,
	leaveGroup,
	delegateGroup,
	changeGroupOption,
	getGroupInfo,
	getGroupInfoDetail,
	getGroupMemberList,
} from "./group-service.js";

const initialState = {
	group: null,
	groupInfo: null,
	groupInfoDetail: null,
	groupList: [],
	groupMemberList: [],
	isLoading: false,
	isUserGroupRefetching: true,
};

const groupSlice = createSlice({
	name: "group",
	initialState,
	reducers: {
		groupInfo: (state, { payload }) => {
			state.groupInfo = payload;
		},
		selectGroupInfo: (state, { payload }) => {
			state.groupInfo = payload;
		},
		setRefetchUserGroup: (state, { payload }) => {
			state.isUserGroupRefetching = payload;
		},
		groupInfoDetail: (state, { payload }) => {
			state.groupInfoDetail = payload;
		},
		viewGroupList: (state, { payload }) => {
			state.groupList = payload;
		},
	},
	extraReducers: (bulider) => {
		bulider
			.addCase(createGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹 생성에 성공하셨습니다!");
			})
			.addCase(createGroup.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getGroupMemberList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGroupMemberList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupMemberList = payload;
			})
			.addCase(getGroupMemberList.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getGroupInfo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGroupInfo.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupInfo = payload;
			})
			.addCase(getGroupInfo.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getGroupInfoDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGroupInfoDetail.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupInfoDetail = payload;
			})
			.addCase(getGroupInfoDetail.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getGroupList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGroupList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupList = payload;
			})
			.addCase(getGroupList.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(deleteGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹을 삭제했습니다.");
			})
			.addCase(deleteGroup.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload.error);
			})
			.addCase(delegateGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(delegateGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹장 위임이 완료되었습니다.");
			})
			.addCase(delegateGroup.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload.error);
			})
			.addCase(updateGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹리더 변경에 성공하였습니다.");
			})
			.addCase(updateGroup.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(leaveGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(leaveGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹을 탈퇴하였습니다.");
			})
			.addCase(leaveGroup.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload.error);
			})
			.addCase(changeGroupOption.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(changeGroupOption.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(changeGroupOption.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload.error);
			});
	},
});

export const { selectGroup, selectGroupInfo, setRefetchUserGroup } =
	groupSlice.actions;

export default groupSlice.reducer;
