import { createSlice } from "@reduxjs/toolkit";

import { SCHEDULE_MODAL_TYPE, UI_TYPE } from "@/constants/uiConstants";

const initialState = {
	openedModal: null,
	scheduleModalMode: SCHEDULE_MODAL_TYPE.CREATE,
	scheduleModalId: null,
	isLoading: true,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		openScheduleCreateModal: (state, action) => {
			const { type } = action.payload;
			if (
				type !== UI_TYPE.PERSONAL_SCHEDULE &&
				type !== UI_TYPE.SHARE_SCHEDULE
			) {
				throw Error("잘못된 modal type입니다");
			}

			state.openedModal = type;
			state.scheduleModalMode = SCHEDULE_MODAL_TYPE.CREATE;
		},
		openScheduleEditModal: (state, action) => {
			const { type, id } = action.payload;
			if (
				type !== UI_TYPE.PERSONAL_SCHEDULE &&
				type !== UI_TYPE.SHARE_SCHEDULE
			) {
				throw Error("잘못된 modal type입니다");
			}

			if (id === null) {
				throw Error("일정 id를 입력해주세요");
			}

			state.openedModal = type;
			state.scheduleModalMode = SCHEDULE_MODAL_TYPE.EDIT;
			state.scheduleModalId = id;
		},
		openScheduleViewModal: (state, action) => {
			const { type, id } = action.payload;
			if (
				type !== UI_TYPE.PERSONAL_SCHEDULE &&
				type !== UI_TYPE.SHARE_SCHEDULE
			) {
				throw Error("잘못된 modal type입니다");
			}

			if (id === null) {
				throw Error("일정 id를 입력해주세요");
			}

			state.openedModal = type;
			state.scheduleModalMode = SCHEDULE_MODAL_TYPE.VIEW;
			state.scheduleModalId = id;
		},
		openScheduleProposalModal: (state) => {
			state.openedModal = UI_TYPE.SHARE_SCHEDULE;
			state.scheduleModalMode = SCHEDULE_MODAL_TYPE.PROPOSAL;
		},
		openCreateGroupModal: (state) => {
			state.openedModal = UI_TYPE.CREATE_GROUP;
		},
		openDeleteGroupModal: (state) => {
			state.openedModal = UI_TYPE.DELETE_GROUP;
		},
		openDelegateGroupModal: (state) => {
			state.openedModal = UI_TYPE.DELEGATE_GROUP;
		},
		openLeaveGroupModal: (state) => {
			state.openedModal = UI_TYPE.LEAVE_GROUP;
		},
		openWithdrawModal: (state) => {
			state.openedModal = UI_TYPE.WITHDRAW;
		},
		openEmptyGroupNotificationModal: (state) => {
			state.openedModal = UI_TYPE.EMPTY_GROUP_NOTIFICATION;
		},
		closeModal: () => {
			return initialState;
		},
		setIsLoading: (state, { payload }) => {
			if (typeof payload !== "boolean") {
				throw new Error("isLoading의 state는 boolean 값만 가능합니다.");
			}

			state.isLoading = payload;
		},
	},
});

export const {
	openScheduleCreateModal,
	openScheduleEditModal,
	openScheduleViewModal,
	openScheduleProposalModal,
	openCreateGroupModal,
	closeModal,
	setIsLoading,
	openDeleteGroupModal,
	openDelegateGroupModal,
	openLeaveGroupModal,
	openWithdrawModal,
	openEmptyGroupNotificationModal,
} = uiSlice.actions;

export default uiSlice.reducer;
