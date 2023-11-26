import { toast } from "react-toastify";

import { createSlice, isAnyOf, isAllOf } from "@reduxjs/toolkit";

import {
	createGroup,
	getGroupList,
	updateGroup,
	leaveGroup,
	delegateGroup,
	changeGroupOption,
	getGroupInfo,
	getGroupInfoDetail,
	getGroupRequestMemberList,
	approveGroupJoin,
	rejectGroupJoin,
	deleteGroupMember,
	deleteGroup,
} from "./group-service.js";

const initialState = {
	groupInfo: null,
	groupInfoDetail: null,
	groupList: [],
	groupRequestMemberList: [],
	isLoading: false,
	isUserGroupRefetching: true,
	isPublicGroup: null,
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
			.addMatcher(
				isAnyOf(
					createGroup.pending,
					deleteGroupMember.pending,
					approveGroupJoin.pending,
					rejectGroupJoin.pending,
					getGroupRequestMemberList.pending,
					getGroupInfo.pending,
					getGroupInfoDetail.pending,
					getGroupList.pending,
					deleteGroup.pending,
					delegateGroup.pending,
					updateGroup.pending,
					leaveGroup.pending,
					changeGroupOption.pending,
				),
				(state) => {
					state.isLoading = true;
				},
			)
			.addMatcher(
				isAnyOf(
					createGroup.rejected,
					createGroup.rejected,
					approveGroupJoin.rejected,
					rejectGroupJoin.rejected,
					getGroupRequestMemberList.rejected,
					getGroupInfo.rejected,
					getGroupInfoDetail.rejected,
					getGroupList.rejected,
					deleteGroup.rejected,
					updateGroup.rejected,
					leaveGroup.rejected,
					changeGroupOption.rejected,
				),
				(state, { payload }) => {
					state.isLoading = false;
					toast.error(payload.error);
				},
			)
			.addMatcher(isAllOf(createGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹 생성에 성공하셨습니다!");
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
					state.isLoading = false;
					state.groupRequestMemberList = payload;
				},
			)
			.addMatcher(isAllOf(getGroupInfo.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.groupInfo = payload;
			})
			.addMatcher(
				isAllOf(getGroupInfoDetail.fulfilled),
				(state, { payload }) => {
					state.isLoading = false;
					state.groupInfoDetail = payload;
					state.isPublicGroup = payload.information.group.isPublicGroup;
				},
			)
			.addMatcher(isAllOf(getGroupList.fulfilled), (state, { payload }) => {
				state.isLoading = false;
				state.groupList = payload;
			})
			.addMatcher(isAllOf(deleteGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹을 삭제했습니다");
			})
			.addMatcher(isAllOf(delegateGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹장 위임이 완료되었습니다.");
			})
			.addMatcher(isAllOf(updateGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹리더 변경에 성공하였습니다.");
			})
			.addMatcher(isAllOf(leaveGroup.fulfilled), (state) => {
				state.isLoading = false;
				toast.success("그룹을 탈퇴하였습니다.");
			})
			.addMatcher(isAllOf(changeGroupOption.fulfilled), (state) => {
				state.isLoading = false;
			});
	},
});

export const { selectGroup, selectGroupInfo, setRefetchUserGroup } =
	groupSlice.actions;

export default groupSlice.reducer;
