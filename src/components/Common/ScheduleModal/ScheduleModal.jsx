import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import FormModal from "@/components/Common/Modal/FormModal/FormModal";
import { SCHEDULE_MODAL_TYPE, UI_TYPE } from "@/constants/uiConstans";
import {
	createSchedule,
	updateSchedule,
} from "@/features/schedule/schedule-service.js";
import { closeModal } from "@/features/ui/ui-slice";

import {
	TitleInput,
	DateInput,
	DetailTextarea,
	DateDiv,
	DateContainerDiv,
	FooterDiv,
	SubmitButton,
	ScheduleModalLayoutDiv,
	InputLabel,
	StyledSelect,
	RepeatContainerDiv,
	AllDayCheckBoxDiv,
} from "./ScheduleModal.styles";

const initialFormValues = {
	title: "",
	content: "",
	startDate: "", // 나중에 DateTime ISOString 형태로 변경 예정
	startTime: "",
	endDate: "",
	endTime: "",
	recurrence: false,
	freq: "NONE",
	interval: "",
	byweekday: "",
	until: "",
	isAllDay: false,
	notification: false,
};

const convertToDateInputValue = (date) => {
	return date.toISOString().slice(0, 10);
};

const getModalTitle = (dateValue) => {
	const YYYY_MM_DD = dateValue.replace(/-/g, ".");
	const title = `${YYYY_MM_DD.slice(0, 4)}년 ${YYYY_MM_DD.slice(
		5,
		7,
	)}월 ${YYYY_MM_DD.slice(8, 10)}일`;
	return title;
};

const getNextDateInputValue = (startDate) => {
	const prevDate = new Date(startDate);
	const nextDate = prevDate.setDate(prevDate.getDate() + 1);
	return new Date(nextDate).toISOString().slice(0, 10);
};

const ScheduleModal = () => {
	const dispatch = useDispatch();

	const { openedModal, scheduleModalMode, scheduleModalId } = useSelector(
		(state) => state.ui,
	);
	const [formValues, setFormValues] = useState(initialFormValues);

	const isEditMode = scheduleModalMode === SCHEDULE_MODAL_TYPE.EDIT;
	const today = convertToDateInputValue(new Date());

	const handleAlldayValueChange = (event) => {
		const { checked } = event.target;
		setFormValues((prev) => ({
			...prev,
			isAllDay: checked,
			endDate: checked ? getNextDateInputValue(prev.startDate) : prev.endDate,
			startTime: checked ? "00:00" : prev.startTime,
			endTime: checked ? "00:00" : prev.endTime,
		}));
	};

	const checkTimeIsValid = () => {
		if (formValues.startDate < formValues.endDate) {
			return true;
		}
		if (formValues.startDate === formValues.endDate) {
			if (formValues.startTime < formValues.endTime) {
				return true;
			}
			toast.error(
				"종료 시간은 시작 시간보다 동일하거나 빠를 수 없습니다. 다시 입력해주세요.",
			);
			return false;
		}
		toast.error(
			"종료 시간은 시작 시간보다 동일하거나 빠를 수 없습니다. 다시 입력해주세요.",
		);
		return false;
	};

	const calculateUntilDateString = (endDateStr) => {
		if (typeof endDateStr !== "string") {
			throw Error(
				`endDateStr은 문자열 타입이어야 합니다. 현재 값은 ${endDateStr}입니다.`,
			);
		}
		if (endDateStr.trim() === "") {
			throw Error(
				`endDateStr은 빈 문자열이 아니어야 합니다. 현재 값은 비어있습니다.`,
			);
		}
		const endDate = new Date(endDateStr);
		let untilDate;
		if (formValues.freq === "DAILY") {
			untilDate = endDate.setDate(endDate.getDate() + 1);
		} else if (formValues.freq === "WEEKLY") {
			untilDate = endDate.setDate(endDate.getDate() + 7);
		} else if (formValues.freq === "MONTHLY") {
			untilDate = endDate.setMonth(endDate.getMonth() + 1);
		}
		return new Date(untilDate).toISOString().slice(0, 10);
	};

	const checkFieldsFilled = () =>
		formValues.title.trim() !== "" &&
		formValues.content.trim() !== "" &&
		formValues.startDate !== "" &&
		formValues.startTime !== "" &&
		formValues.endDate !== "" &&
		formValues.endTime !== "" &&
		(formValues.freq === "NONE" ||
			(formValues.until &&
				formValues.until > calculateUntilDateString(formValues.endDate))) &&
		(openedModal === UI_TYPE.SHARE_SCHEDULE
			? formValues.voteEndDate !== "" && formValues.voteEndTime !== ""
			: true);

	const handleSubmit = () => {
		// 시간 유효성 검사
		if (!checkTimeIsValid()) {
			return;
		}

		// 일정 저장 로직
		if (!isEditMode) {
			dispatch(createSchedule(formValues));
		}
		if (isEditMode) {
			dispatch(updateSchedule({ schedule: formValues, id: scheduleModalId }));
		}

		// 폼 초기화
		setFormValues(initialFormValues);

		// 메뉴 닫기
		dispatch(closeModal());
	};

	useEffect(() => {
		if (formValues.startDate !== formValues.endDate)
			setFormValues((prev) => ({ ...prev, isAllDay: false }));
		else if (formValues.startTime !== "00:00" || formValues.endTime !== "00:00")
			setFormValues((prev) => ({ ...prev, isAllDay: false }));
	}, [
		formValues.startDate,
		formValues.endDate,
		formValues.startTime,
		formValues.endTime,
	]);

	return (
		<FormModal title={getModalTitle(today)} isEmpty={!checkFieldsFilled()}>
			<ScheduleModalLayoutDiv>
				<TitleInput
					id="title"
					type="text"
					placeholder="일정 제목"
					value={formValues.title}
					onChange={(e) =>
						setFormValues((prev) => ({ ...prev, title: e.target.value }))
					}
				/>
				<DetailTextarea
					id="content"
					rows="5"
					placeholder="상세 내용"
					value={formValues.content}
					onChange={(e) =>
						setFormValues((prev) => ({ ...prev, content: e.target.value }))
					}
				/>
				<InputLabel htmlFor="startDate">날짜 및 시간</InputLabel>
				<DateContainerDiv>
					<DateDiv>
						<DateInput
							id="startDate"
							type="date"
							min={today}
							value={formValues.startDate}
							onChange={(e) =>
								setFormValues((prev) => ({
									...prev,
									startDate: e.target.value,
								}))
							}
						/>
						<DateInput
							type="time"
							value={formValues.startTime}
							onChange={(e) => {
								setFormValues((prev) => ({
									...prev,
									startTime: e.target.value,
								}));
							}}
						/>
					</DateDiv>
					~
					<DateDiv>
						<DateInput
							type="date"
							disabled={!formValues.startDate}
							min={formValues.startDate || today}
							value={formValues.endDate}
							onChange={(e) =>
								setFormValues({ ...formValues, endDate: e.target.value })
							}
						/>
						<DateInput
							type="time"
							min={
								formValues.startDate === formValues.endDate
									? formValues.startTime
									: undefined
							}
							value={formValues.endTime}
							onChange={(e) =>
								setFormValues({ ...formValues, endTime: e.target.value })
							}
						/>
					</DateDiv>
					{formValues.startDate && (
						<AllDayCheckBoxDiv>
							<label>
								<input
									type="checkbox"
									onChange={handleAlldayValueChange}
									checked={formValues.isAllDay}
								/>
								하루 종일
							</label>
						</AllDayCheckBoxDiv>
					)}
				</DateContainerDiv>
				{openedModal === UI_TYPE.SHARE_SCHEDULE ? (
					<>
						<InputLabel>일정 투표 종료일</InputLabel>
						<DateContainerDiv>
							<DateDiv>
								<DateInput
									type="date"
									min={formValues.startDate || today}
									value={formValues.voteEndDate}
									onChange={(e) =>
										setFormValues({
											...formValues,
											voteEndDate: e.target.value,
										})
									}
								/>
								<DateInput
									type="time"
									value={formValues.voteEndTime}
									onChange={(e) =>
										setFormValues({
											...formValues,
											voteEndTime: e.target.value,
										})
									}
								/>
							</DateDiv>
						</DateContainerDiv>
					</>
				) : (
					formValues.startDate &&
					formValues.endDate && (
						<RepeatContainerDiv>
							<div>
								<InputLabel htmlFor="repeat">반복 여부</InputLabel>
								<StyledSelect
									id="repeat"
									value={formValues.freq}
									onChange={(e) =>
										setFormValues((prev) => ({
											...prev,
											freq: e.target.value,
											until: e.target.value === "NONE" ? "" : prev.until,
										}))
									}
								>
									<option value="NONE">반복 안함</option>
									<option value="DAILY">매일</option>
									<option value="WEEKLY">매주</option>
									<option value="MONTHLY">매월</option>
								</StyledSelect>
							</div>
							{formValues.freq !== "NONE" && (
								<div>
									<InputLabel>반복 종료 날짜</InputLabel>
									<DateInput
										type="date"
										min={calculateUntilDateString(formValues.endDate)}
										value={formValues.until}
										onChange={(e) =>
											setFormValues((prev) => ({
												...prev,
												until: e.target.value,
											}))
										}
									/>
								</div>
							)}
						</RepeatContainerDiv>
					)
				)}
				<InputLabel htmlFor="alarm">알림 기능</InputLabel>
				<StyledSelect
					value={formValues.notification}
					onChange={(e) =>
						setFormValues((prev) => ({
							...prev,
							notification: e.target.value === "NO",
						}))
					}
				>
					<option value="NO">사용 안함</option>
					<option value="YES">사용함</option>
				</StyledSelect>
				<FooterDiv>
					<SubmitButton onClick={handleSubmit} disabled={!checkFieldsFilled()}>
						{isEditMode ? "수정하기" : "저장하기"}
					</SubmitButton>
				</FooterDiv>
			</ScheduleModalLayoutDiv>
		</FormModal>
	);
};

export default ScheduleModal;
