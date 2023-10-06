import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import _ from "lodash";
import moment from "moment";

import FormModal from "@/components/Common/Modal/FormModal/FormModal";
import { SCHEDULE_MODAL_TYPE, UI_TYPE } from "@/constants/uiConstans";
import {
	createSchedule,
	updateSchedule,
} from "@/features/schedule/schedule-service.js";
import { closeModal, setIsLoading } from "@/features/ui/ui-slice";
import { getSchedule } from "@/utils/calendarUtils";
import { convertScheduleDataToFormValue } from "@/utils/convertSchedule";

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
	WeeklyDatePickerDiv,
} from "./ScheduleModal.styles";

const WEEK_STRING_PAIRS = [
	["SU", "일"],
	["MO", "월"],
	["TU", "화"],
	["WE", "수"],
	["TH", "목"],
	["FR", "금"],
	["SA", "토"],
];

const initialFormValues = {
	title: "",
	content: "",
	startDate: moment().format("YYYY-MM-DD"),
	startTime: moment().format("HH:mm"),
	endDate: moment().format("YYYY-MM-DD"),
	endTime: moment().format("HH:mm"),
	freq: "NONE",
	interval: "",
	byweekday: [],
	until: "",
	isAllDay: false,
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

const setByweekday = (weekNum, prev, checked) => {
	if (!checked) {
		return prev.filter((num) => num !== weekNum);
	}
	if (prev.indexOf(weekNum) === -1) {
		prev.push(weekNum);
	}
	return prev;
};

const ScheduleModal = () => {
	const dispatch = useDispatch();

	const prevFormValue = useRef(initialFormValues);

	const { openedModal, scheduleModalMode, scheduleModalId, isLoading } =
		useSelector((state) => state.ui);
	const isEditMode = scheduleModalMode === SCHEDULE_MODAL_TYPE.EDIT;
	const [formValues, setFormValues] = useState(initialFormValues);
	const today = convertToDateInputValue(new Date());

	const handleDateValue = (event) => {
		const {
			target: { value, id },
		} = event;
		if (id === "startDate") {
			setFormValues((prev) => ({
				...prev,
				startDate: value,
				endDate: !prev.endDate || prev.endDate < value ? value : prev.endDate,
			}));
		} else if (id === "endDate") {
			setFormValues((prev) => ({
				...prev,
				startDate:
					!prev.startDate || prev.startDate > value ? value : prev.endDate,
				endDate: value,
			}));
		}
	};

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

	const checkFormIsChanged = () => {
		const trimmedFormValues = {
			...formValues,
			title: formValues.title.trim(),
			content: formValues.content.trim(),
		};
		if (_.isEqual(trimmedFormValues, prevFormValue.current)) {
			return false;
		}
		return (
			formValues.title.trim() !== "" &&
			formValues.content.trim() !== "" &&
			formValues.startDate !== "" &&
			formValues.startTime !== "" &&
			formValues.endDate !== "" &&
			formValues.endTime !== "" &&
			(formValues.freq === "NONE" ||
				(formValues.until &&
					formValues.until > calculateUntilDateString(formValues.endDate))) &&
			(formValues.freq === "WEEKLY"
				? formValues.byweekday.length > 0 &&
				  formValues.byweekday.indexOf(
						new Date(formValues.startDate).getDay() !== -1,
				  )
				: true) &&
			(openedModal === UI_TYPE.SHARE_SCHEDULE
				? formValues.voteEndDate !== "" && formValues.voteEndTime !== ""
				: true)
		);
	};

	const handleSubmit = () => {
		// 시간 유효성 검사
		if (!checkTimeIsValid()) {
			return;
		}

		// 일정 저장 로직
		if (!isEditMode) {
			dispatch(createSchedule(formValues));
		} else {
			dispatch(updateSchedule({ schedule: formValues, id: scheduleModalId }));
		}

		// 폼 초기화
		setFormValues(initialFormValues);

		// 메뉴 닫기
		dispatch(closeModal());
	};

	useEffect(() => {
		// set isAllDay
		if (!formValues.startDate) {
			return;
		}
		if (getNextDateInputValue(formValues.startDate) !== formValues.endDate)
			setFormValues((prev) => ({ ...prev, isAllDay: false }));
		else if (formValues.startTime !== "00:00" || formValues.endTime !== "00:00")
			setFormValues((prev) => ({ ...prev, isAllDay: false }));
	}, [
		formValues.startDate,
		formValues.endDate,
		formValues.startTime,
		formValues.endTime,
	]);

	useEffect(() => {
		if (formValues.freq !== "WEEKLY" || !formValues.startDate) {
			return;
		}
		const weekNum = new Date(formValues.startDate).getDay();
		setFormValues((prev) => ({
			...prev,
			byweekday:
				prev.byweekday.indexOf(weekNum) === -1 ? [weekNum] : prev.byweekday,
		}));
	}, [formValues.startDate, formValues.freq]);

	useEffect(() => {
		if (isEditMode) {
			getSchedule(scheduleModalId, (schedule) => {
				dispatch(setIsLoading(false));
				setFormValues(convertScheduleDataToFormValue(schedule));
				prevFormValue.current = convertScheduleDataToFormValue(schedule);
			});
		} else {
			dispatch(setIsLoading(false));
		}

		return () => {
			dispatch(closeModal());
		};
	}, [isEditMode, scheduleModalId]);

	return (
		<FormModal title={getModalTitle(today)} isEmpty={!checkFormIsChanged()}>
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
							onChange={handleDateValue}
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
							id="endDate"
							type="date"
							disabled={!formValues.startDate}
							min={formValues.startDate || today}
							value={formValues.endDate}
							onChange={handleDateValue}
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
								<div>
									<InputLabel htmlFor="frequency">반복 여부</InputLabel>
									<StyledSelect
										id="frequency"
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
							</div>
							{formValues.freq === "WEEKLY" && (
								<WeeklyDatePickerDiv>
									{WEEK_STRING_PAIRS.map(([EN, KR], index) => (
										<label key={EN} htmlFor={EN}>
											{KR}
											<input
												type="checkbox"
												id={EN}
												checked={formValues.byweekday.indexOf(index) !== -1}
												onChange={({ target: { checked } }) => {
													setFormValues((prev) => ({
														...prev,
														byweekday:
															new Date(formValues.startDate).getDay() === index
																? prev.byweekday
																: setByweekday(index, prev.byweekday, checked),
													}));
												}}
											/>
										</label>
									))}
								</WeeklyDatePickerDiv>
							)}
						</RepeatContainerDiv>
					)
				)}
				<FooterDiv
					isAllDayCheckboxDisplayed={
						formValues.startDate && !formValues.endDate
					}
				>
					<SubmitButton
						onClick={handleSubmit}
						disabled={!checkFormIsChanged() || isLoading}
					>
						{isEditMode ? "수정하기" : "저장하기"}
					</SubmitButton>
				</FooterDiv>
			</ScheduleModalLayoutDiv>
		</FormModal>
	);
};

export default ScheduleModal;
