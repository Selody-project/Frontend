import { createSlice } from "@reduxjs/toolkit";
import {
	createGroup,
	deleteGroup,
	getGroupList,
	updateGroup,
} from "./group-service.js";

const initialState = {
	group: null,
	groupList: [],
	isLoading: false,
};

const groupSlice = createSlice({
	name: "group",
	initialState,
	reducers: {},
	extraReducers: (bulider) => {
		bulider
			.addCase(createGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createGroup.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.success("그룹 생성에 성공하셨습니다!");
			})
			.addCase(createGroup.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			})
			.addCase(getGroupList.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGroupList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.groupList = payload;
				toast.success("그룹 리스트를 불러왔습니다.");
			})
			.addCase(getGroupList.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			})
			.addCase(deleteGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteGroup.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.success("그룹을 삭제하는데 성공하였습니다.");
			})
			.addCase(deleteGroup.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			})
			.addCase(updateGroup.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateGroup.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				toast.success("그룹리더 변경에 성공하였습니다.");
			})
			.addCase(updateGroup.rejected, (state, { payload }) => {
				state.isLoading = false;
				console.log(payload);
			});
	},
});
