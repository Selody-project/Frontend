import { toast } from "react-toastify";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
	updateGroup,
	leaveGroup,
	delegateGroup,
	changeGroupOption,
	searchGroup,
	createGroup,
	deleteGroup,
	getGroupList,
	getGroupInfo,
	getGroupRequestMemberList,
	approveGroupJoin,
	rejectGroupJoin,
	deleteGroupMember,
	cancelGroupJoin,
	changeRequestGroupJoin,
	changeGroupPublicOption,
	updateGroupProfile,
	getGroupMemberList,
	changeAccessLevel,
	withdrawalGroup,
	joinGroupInviteLink,
} from "./group-service.js";

const initialState = {
	group: null,
	groupList: [],
	lastRecordId: 0,
	searchLastRecordId: 0,
	searchGroupList: [],
	isLoading: false,
	isMemberListLoading: false,
	groupInfo: null,
	groupRequestMemberList: [],
	isUserGroupRefetching: true,
	groupMemberList: [],
	isEnd: false,
};

const groupSlice = createSlice({
	name: "group",
	initialState,
	reducers: {
		setRefetchUserGroup: (state, { payload }) => {
			state.isUserGroupRefetching = payload;
		},
	},
	extraReducers: (bulider) => {
		bulider
			.addCase(getGroupRequestMemberList.pending, (state) => {
				state.isMemberListLoading = true;
			})
			.addCase(getGroupRequestMemberList.rejected, (state) => {
				state.isMemberListLoading = false;
			})
			.addCase(deleteGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹을 삭제하는데 성공하였습니다.");
			})
			.addCase(searchGroup.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.isEnd = payload.isEnd;

				if (payload.groups.length > 0 && !payload.isEnd) {
					state.searchLastRecordId =
						payload.groups[payload.groups.length - 1].groupId;
					state.searchGroupList = [...state.searchGroupList, ...payload.groups];
				} else {
					state.searchGroupList = payload.groups;
				}

				if (payload.isEnd) {
					state.isEnd = false;
				}
			})
			.addCase(getGroupList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupList = [...state.groupList, ...payload.groups];
				state.isEnd = payload.isEnd;

				if (payload.groups.length > 0) {
					state.lastRecordId =
						payload.groups[payload.groups.length - 1].groupId;
				}

				if (payload.isEnd) {
					state.isEnd = false;
				}
			})
			.addCase(leaveGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹을 탈퇴하였습니다.");
			})
			.addCase(updateGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹리더 변경에 성공하였습니다.");
			})
			.addCase(deleteGroupMember.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹원 내보내기 완료");
			})
			.addCase(approveGroupJoin.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹 가입 신청 수락 완료");
			})
			.addCase(rejectGroupJoin.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹 가입 신청 거절 완료");
			})
			.addCase(getGroupRequestMemberList.fulfilled, (state, { payload }) => {
				state.isMemberListLoading = false;
				state.groupRequestMemberList = payload;
			})
			.addCase(getGroupInfo.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupInfo = payload;
			})
			.addCase(changeRequestGroupJoin.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹 신청 취소 완료");
			})
			.addCase(changeGroupPublicOption.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.error(payload.error);
			})
			.addCase(
				updateGroupProfile.fulfilled,
				(state, { payload: { name, description, image } }) => {
					state.isLoading = false;
					state.groupInfo = { ...state.groupInfo, name, description, image };
					toast.success("그룹 정보가 수정되었습니다");
				},
			)
			.addCase(cancelGroupJoin.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹 신청 취소 완료");
			})
			.addCase(changeGroupOption.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(delegateGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹장 위임이 완료되었습니다.");
			})
			.addCase(getGroupMemberList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupMemberList = payload;
			})
			.addCase(changeAccessLevel.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹원 권한이 변경되었습니다.");
			})
			.addCase(withdrawalGroup.fulfilled, (state) => {
				state.isLoading = false;
				toast.error("그룹 탈퇴에 성공하였습니다");
			})
			.addCase(joinGroupInviteLink.fulfilled, (state) => {
				state.isLoading = false;
				toast.success("그룹 가입에 성공하였습니다");
			})
			.addMatcher(
				isAnyOf(
					searchGroup.pending,
					createGroup.pending,
					getGroupList.pending,
					deleteGroup.pending,
					updateGroup.pending,
					leaveGroup.pending,
					cancelGroupJoin.pending,
					deleteGroupMember.pending,
					approveGroupJoin.pending,
					rejectGroupJoin.pending,
					getGroupInfo.pending,
					delegateGroup.pending,
					changeGroupOption.pending,
					changeRequestGroupJoin.pending,
					changeGroupPublicOption.pending,
					updateGroupProfile.pending,
					getGroupMemberList.pending,
					changeAccessLevel.pending,
					withdrawalGroup.pending,
					joinGroupInviteLink.pending,
				),
				(state) => {
					state.isLoading = true;
				},
			)
			.addMatcher(
				isAnyOf(
					searchGroup.rejected,
					createGroup.rejected,
					getGroupList.rejected,
					deleteGroup.rejected,
					updateGroup.rejected,
					leaveGroup.rejected,
					cancelGroupJoin.rejected,
					deleteGroupMember.rejected,
					approveGroupJoin.rejected,
					rejectGroupJoin.rejected,
					getGroupInfo.rejected,
					delegateGroup.rejected,
					changeGroupOption.rejected,
					changeRequestGroupJoin.rejected,
					changeGroupPublicOption.rejected,
					updateGroupProfile.rejected,
					getGroupMemberList.rejected,
					changeAccessLevel.rejected,
					withdrawalGroup.rejected,
					joinGroupInviteLink.rejected,
				),
				(state) => {
					state.isLoading = false;
				},
			);
	},
});

export const { selectGroup, selectGroupInfo, setRefetchUserGroup } =
	groupSlice.actions;

export default groupSlice.reducer;
