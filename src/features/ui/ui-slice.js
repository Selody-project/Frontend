import { createSlice } from "@reduxjs/toolkit";

import { SCHEDULE_MODAL_TYPE, UI_TYPE } from "@/constants/uiConstans";

const initialState = {
	openedModal: null,
	scheduleModalMode: SCHEDULE_MODAL_TYPE.CREATE,
	scheduleModalId: null,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		// openModal: (state, action) => {
		// 	const { type, scheduleModalMode, scheduleModalId } = action.payload;
		// 	if (
		// 		(type === UI_TYPE.PERSONAL_SCHEDULE ||
		// 			type === UI_TYPE.SHARE_SCHEDULE) &&
		// 		(scheduleModalMode === SCHEDULE_MODAL_TYPE.CREATE ||
		// 			scheduleModalMode === SCHEDULE_MODAL_TYPE.EDIT)
		// 	) {
		// 		state.openedModal = type;
		// 		state.scheduleModalMode = scheduleModalMode;
		// 		if (scheduleModalMode === SCHEDULE_MODAL_TYPE.EDIT) {
		// 			if (scheduleModalId) {
		// 				state.scheduleModalId = scheduleModalId;
		// 			} else {
		// 				throw Error("수정하려는 일정의 id를 입력하세요");
		// 			}
		// 		}
		// 	} else if (scheduleModalMode === UI_TYPE.CREATE_GROUP) {
		// 		state.openedModal = scheduleModalMode;
		// 	}
		// },
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
		openCreateGroupModal: (state) => {
			state.openedModal = UI_TYPE.CREATE_GROUP;
		},
		closeModal: (state) => {
			state.openedModal = null;
		},
	},
});

export const {
	openScheduleCreateModal,
	openScheduleEditModal,
	openCreateGroupModal,
	closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;
