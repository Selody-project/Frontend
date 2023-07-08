import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { handleMenuToggle } from "../../../features/user/user-slice.js";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import {
	createSchedule,
	updateSchedule,
} from "@/features/schedule/schedule-service.js";

const ModalWindow = ({ shareModal, setShareModal }) => {
	const dispatch = useDispatch();
	const { edit } = useSelector((state) => state.user);
	const { id } = useSelector((state) => state.schedule);
	const [formValues, setFormValues] = useState({
		title: "",
		details: "",
		startDate: "",
		startTime: "",
		endDate: "",
		endTime: "",
		voteEndDate: "",
		voteEndTime: "",
	});

	const today = new Date().toISOString().slice(0, 10);
	let currentDate = today.replace(/-/g, ".");
	currentDate = `${currentDate.slice(0, 4)}년 ${currentDate.slice(
		5,
		7,
	)}월 ${currentDate.slice(8, 10)}일`;

	const isTimeValid = () => {
		if (formValues.startDate === formValues.endDate) {
			if (formValues.endTime < formValues.startTime) {
				toast.error(
					"종료 시간은 시작 시간보다 빠를 수 없습니다. 다시 입력해주세요.",
				);
				return false;
			}
		}
		return true;
	};

	const handleClose = () => {
		dispatch(handleMenuToggle());
		setShareModal(false);
	};

	const checkFieldsFilled = () =>
		formValues.title &&
		formValues.details &&
		formValues.startDate &&
		formValues.startTime &&
		formValues.endDate &&
		formValues.endTime &&
		formValues.voteEndDate &&
		formValues.voteEndTime;

	const handleSubmit = () => {
		// 시간 유효성 검사
		if (!isTimeValid()) {
			return;
		}

		// 일정 저장 로직
		if (!edit) {
			dispatch(createSchedule(formValues));
		}
		if (edit) {
			dispatch(updateSchedule({ schedule: formValues, id }));
		}

		// 폼 초기화
		setFormValues({
			title: "",
			details: "",
			startDate: "",
			startTime: "",
			endDate: "",
			endTime: "",
			voteEndDate: "",
			voteEndTime: "",
		});

		// 메뉴 닫기
		setShareModal(false);
	};

	return (
		<Dialog open={shareModal} onClose={handleClose} fullWidth maxWidth="md">
			<DialogTitle
				className="bg-primary text-white"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<ModalHeader currentDate={currentDate} />
				<IconButton
					edge="end"
					color="inherit"
					onClick={handleClose}
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent className="p-4">
				<ModalBody
					formValues={formValues}
					setFormValues={setFormValues}
					today={today}
				/>
				<ModalFooter
					handleSubmit={handleSubmit}
					checkFieldsFilled={checkFieldsFilled}
					edit={edit}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default ModalWindow;
