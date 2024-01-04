import { toast } from "react-toastify";

import { createSlice, isAnyOf, isAllOf } from "@reduxjs/toolkit";

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
	createGroupInviteLink,
	getGroupMemberList,
	changeAccessLevel,
	withdrawalGroup,
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
	groupInviteLink: null,
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
		groupInfoDetail: (state, { payload }) => {
			state.groupInfoDetail = payload;
		},
		viewGroupList: (state, { payload }) => {
			state.groupList = payload;
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
					createGroupInviteLink.pending,
					getGroupMemberList.pending,
					changeAccessLevel.pending,
					withdrawalGroup.pending,
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
					createGroupInviteLink.rejected,
					getGroupMemberList.rejected,
					changeAccessLevel.rejected,
					withdrawalGroup.rejected,
				),
				(state) => {
					state.isLoading = false;
				},
			)
			.addMatcher(isAllOf(searchGroup.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.searchGroupList = [...state.searchGroupList, ...payload.groups];
				state.isEnd = payload.isEnd;

				if (payload.groups.length > 0) {
					state.searchLastRecordId =
						payload.groups[payload.groups.length - 1].groupId;
				}

				if (payload.isEnd) {
					state.isEnd = false;
				}
			})
			.addMatcher(isAllOf(createGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹 생성에 성공하셨습니다!");
			})
			.addMatcher(isAllOf(getGroupList.fulfilled), (state, { payload }) => {
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
			.addMatcher(isAllOf(deleteGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹을 삭제하는데 성공하였습니다.");
			})
			.addMatcher(isAllOf(leaveGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹을 탈퇴하였습니다.");
			})
			.addMatcher(isAllOf(updateGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹리더 변경에 성공하였습니다.");
			})
			.addMatcher(isAllOf(deleteGroupMember.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹원 내보내기 완료");
			})
			.addMatcher(isAllOf(approveGroupJoin.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹 가입 신청 수락 완료");
			})
			.addMatcher(isAllOf(rejectGroupJoin.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹 가입 신청 거절 완료");
			})
			.addMatcher(
				isAllOf(getGroupRequestMemberList.fulfilled),
				(state, { payload }) => {
					state.isMemberListLoading = false;
					state.groupRequestMemberList = payload;
				},
			)
			.addMatcher(isAllOf(getGroupInfo.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.groupInfo = payload;
			})
			.addMatcher(isAllOf(changeRequestGroupJoin.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹 신청 취소 완료");
			})
			.addMatcher(
				isAllOf(changeGroupPublicOption.fulfilled),
				(state, { payload }) => {
					state.isLoading = false;
					toast.error(payload.error);
				},
			)
			.addMatcher(
				isAllOf(updateGroupProfile.fulfilled),
				(state, { payload: { name, description, image } }) => {
					state.isLoading = false;
					state.groupInfo = { ...state.groupInfo, name, description, image };
					toast.success("그룹 정보가 수정되었습니다");
				},
			)
			.addMatcher(isAllOf(cancelGroupJoin.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹 신청 취소 완료");
			})
			.addMatcher(isAllOf(changeGroupOption.fulfilled), (state) => {
				state.isLoading = false;
			})
			.addMatcher(isAllOf(delegateGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹장 위임이 완료되었습니다.");
			})
			.addMatcher(
				isAllOf(createGroupInviteLink.fulfilled),
				(state, { payload }) => {
					state.isLoading = false;
					state.groupInviteLink = payload;
				},
			)
			.addMatcher(
				isAllOf(getGroupMemberList.fulfilled),
				(state, { payload }) => {
					state.isLoading = false;
					state.groupMemberList = payload;
				},
			)
			.addMatcher(isAllOf(changeAccessLevel.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹원 권한이 변경되었습니다.");
			})
			.addMatcher(isAllOf(withdrawalGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.error("그룹 탈퇴에 성공하였습니다");
			});
	},
});

export const { selectGroup, selectGroupInfo, setRefetchUserGroup } =
	groupSlice.actions;

export default groupSlice.reducer;
