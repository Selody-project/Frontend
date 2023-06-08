import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { handleMenuToggle } from "../../../features/user/user-slice.js";
import { saveSchedule } from "@/features/schedule/schedule-slice.js";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const ModalWindow = () => {
	const [formValues, setFormValues] = useState({
		title: "",
		details: "",
		startDate: "",
		startTime: "",
		endDate: "",
		endTime: "",
		repeat: "none",
		notification: "none",
	});

	const today = new Date().toISOString().slice(0, 10);
	let currentDate = today.replace(/-/g, ".");
	currentDate = `${currentDate.slice(0, 4)}년 ${currentDate.slice(
		5,
		7,
	)}월 ${currentDate.slice(8, 10)}일`;

	const menuOpen = useSelector((state) => state.user.menuOpen);
	const dispatch = useDispatch();

	const handleMenuOpen = () => {
		dispatch(handleMenuToggle());
	};

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

	const checkFieldsFilled = () =>
		formValues.title &&
		formValues.details &&
		formValues.startDate &&
		formValues.startTime &&
		formValues.endDate &&
		formValues.endTime;

	const handleSubmit = () => {
		// 시간 유효성 검사
		if (!isTimeValid()) {
			return;
		}

		// 일정 저장 로직
		dispatch(saveSchedule(formValues));

		// 폼 초기화
		setFormValues({
			title: "",
			details: "",
			startDate: "",
			startTime: "",
			endDate: "",
			endTime: "",
			repeat: "none",
			notification: "none",
		});

		// 메뉴 닫기
		handleMenuOpen();
	};

	// return (
	// 	<Offcanvas
	// 		show={menuOpen}
	// 		onHide={handleMenuOpen}
	// 		placement="end"
	// 		style={{ width: "40%" }}
	// 	>
	// 		<Offcanvas.Header closeButton>
	// 			<Offcanvas.Title>
	// 				<ModalHeader currentDate={currentDate} />
	// 			</Offcanvas.Title>
	// 		</Offcanvas.Header>
	// 		<Offcanvas.Body>
	// 			<ModalBody
	// 				formValues={formValues}
	// 				setFormValues={setFormValues}
	// 				today={today}
	// 			/>
	// 			<ModalFooter
	// 				handleSubmit={handleSubmit}
	// 				checkFieldsFilled={checkFieldsFilled}
	// 			/>
	// 		</Offcanvas.Body>
	// 	</Offcanvas>
	// );
	return (
		<Offcanvas
			show={menuOpen}
			onHide={handleMenuOpen}
			placement="end"
			className="bg-light text-dark"
			style={{ width: "45%" }}
		>
			<Offcanvas.Header closeButton className="bg-primary text-white">
				<Offcanvas.Title>
					<ModalHeader currentDate={currentDate} />
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body className="p-4">
				<ModalBody
					formValues={formValues}
					setFormValues={setFormValues}
					today={today}
				/>
				<ModalFooter
					handleSubmit={handleSubmit}
					checkFieldsFilled={checkFieldsFilled}
				/>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default ModalWindow;
