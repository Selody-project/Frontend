import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openedModal: null,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.openedModal = action.payload.type;
		},
		closeModal: (state) => {
			state.openedModal = null;
		},
	},
});

export const { openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
