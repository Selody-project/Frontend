import { createSlice } from "@reduxjs/toolkit";

import { SCHEDULE_MODAL_TYPE, UI_TYPE } from "@/constants/uiConstans";

const initialState = {
	openedModal: null,
	scheduleModalMode: SCHEDULE_MODAL_TYPE.CREATE,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		openModal: (state, action) => {
			const { type, scheduleModalMode } = action.payload;
			if (
				(UI_TYPE.PERSONAL_SCHEDULE === type ||
					UI_TYPE.SHARE_SCHEDULE === type) &&
				(scheduleModalMode === SCHEDULE_MODAL_TYPE.CREATE ||
					scheduleModalMode === SCHEDULE_MODAL_TYPE.EDIT)
			) {
				state.openedModal = type;
				state.scheduleModalMode = scheduleModalMode;
			} else if (scheduleModalMode === UI_TYPE.CREATE_GROUP) {
				state.openedModal = scheduleModalMode;
			}
		},
		closeModal: (state) => {
			state.openedModal = null;
		},
	},
});

export const { openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
