import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useTheme } from "styled-components";

import BaseModal from "@/components/Base/BaseModal/BaseModal";
import { UI_TYPE } from "@/constants/uiConstans";
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
	InputLabel,
	FooterDiv,
	SubmitButton,
	ScheduleModalLayoutDiv,
	AllDayCheckBoxDiv,
	RepeatContainerDiv,
	StyledSelect,
} from "./ScheduleModal.styles";

const ScheduleModal = ({ type, initFormValues }) => {
	const theme = useTheme();

	const dispatch = useDispatch();
	const { edit } = useSelector((state) => state.auth);
	const { id } = useSelector((state) => state.schedule);
	const [formValues, setFormValues] = useState(initFormValues);

	const today = new Date().toISOString().slice(0, 10);
	let currentDate = today.replace(/-/g, ".");
	currentDate = `${currentDate.slice(0, 4)}년 ${currentDate.slice(
		5,
		7,
	)}월 ${currentDate.slice(8, 10)}일`;

	const handleAlldayValueChange = (event) => {
		const { checked } = event.target;
		if (checked) {
			setFormValues((prev) => ({
				...prev,
				startTime: "",
				endDate: prev.startDate,
				endTime: "",
			}));
		}
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
		formValues.title !== "" &&
		formValues.details !== "" &&
		formValues.startDate !== "" &&
		formValues.startTime !== "" &&
		formValues.endDate !== "" &&
		formValues.endTime !== "" &&
		(type === UI_TYPE.SHARE_SCHEDULE
			? formValues.voteEndDate !== "" && formValues.voteEndTime !== ""
			: true);

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
		setFormValues({ ...initFormValues });

		// 메뉴 닫기
		dispatch(closeModal());
	};

	return (
		<BaseModal title={currentDate} bg={theme.colors.white}>
			<ScheduleModalLayoutDiv>
				<TitleInput
					id="title"
					type="text"
					placeholder="일정 제목"
					value={formValues.title}
					onChange={(e) =>
						setFormValues({ ...formValues, title: e.target.value })
					}
				/>
				<DetailTextarea
					id="details"
					rows="5"
					placeholder="상세 내용"
					value={formValues.details}
					onChange={(e) =>
						setFormValues({ ...formValues, details: e.target.value })
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
								setFormValues({ ...formValues, startDate: e.target.value })
							}
						/>
						<DateInput
							type="time"
							value={formValues.startTime}
							onChange={(e) =>
								setFormValues({ ...formValues, startTime: e.target.value })
							}
						/>
					</DateDiv>
					~
					<DateDiv>
						<DateInput
							type="date"
							min={formValues.startDate || today}
							value={formValues.endDate}
							onChange={(e) =>
								setFormValues({ ...formValues, endDate: e.target.value })
							}
						/>
						<DateInput
							type="time"
							value={formValues.endTime}
							onChange={(e) =>
								setFormValues({ ...formValues, endTime: e.target.value })
							}
						/>
					</DateDiv>
					{formValues.startDate && (
						<AllDayCheckBoxDiv>
							<label>
								<input type="checkbox" onChange={handleAlldayValueChange} />
								하루 종일
							</label>
						</AllDayCheckBoxDiv>
					)}
				</DateContainerDiv>
				{type === UI_TYPE.SHARE_SCHEDULE ? (
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
					<RepeatContainerDiv>
						<div>
							<InputLabel htmlFor="repeat">반복 여부</InputLabel>
							<StyledSelect
								id="repeat"
								value={formValues.repeat}
								onChange={(e) =>
									setFormValues({ ...formValues, repeat: e.target.value })
								}
							>
								<option value="NONE">반복 안함</option>
								<option value="DAILY">매일</option>
								<option value="WEEKLY">매주</option>
								<option value="MONTHLY">매월</option>
								<option value="YEARLY">매년</option>
							</StyledSelect>
						</div>
						{formValues.repeat !== "NONE" && (
							<div>
								<InputLabel>반복 종료 날짜</InputLabel>
								<DateInput
									type="date"
									min={today}
									value={formValues.untilDate}
									onChange={(e) =>
										setFormValues({
											...formValues,
											untilDate: e.target.value,
										})
									}
								/>
							</div>
						)}
					</RepeatContainerDiv>
				)}
				<InputLabel htmlFor="alarm">알림 기능</InputLabel>
				<StyledSelect
					onChange={(e) =>
						setFormValues({
							...formValues,
							notification: e.target.value,
						})
					}
				>
					<option value="NO">사용 안함</option>
					<option value="YES">사용함</option>
				</StyledSelect>
				<FooterDiv>
					<SubmitButton onClick={handleSubmit} disabled={!checkFieldsFilled()}>
						{edit ? "수정하기" : "저장하기"}
					</SubmitButton>
				</FooterDiv>
			</ScheduleModalLayoutDiv>
		</BaseModal>
	);
};

export default ScheduleModal;
