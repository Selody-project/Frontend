import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import BaseModal from "@/components/Common/Modal/BaseModal.jsx";
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
	LabelDiv,
	RepeatSelect,
	RepeatTermDiv,
	FooterDiv,
	SubmitButton,
} from "./ScheduleModal.styles";

const ScheduleModal = ({ type, initFormValues }) => {
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
		(type === "SHARE_SCHEDULE"
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
		<BaseModal title={currentDate} bg="#fff">
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
			<LabelDiv>
				{formValues.repeat === "none" ? "날짜 및 시간" : "반복 일정"}
			</LabelDiv>
			<DateContainerDiv>
				<DateDiv>
					<DateInput
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
			</DateContainerDiv>
			{type === "SHARE_SCHEDULE" ? (
				<>
					<LabelDiv>일정 투표 종료일</LabelDiv>
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
				<>
					<LabelDiv>반복 여부</LabelDiv>
					<RepeatSelect
						value={formValues.repeat}
						onChange={(e) =>
							setFormValues({ ...formValues, repeat: e.target.value })
						}
					>
						<option value="none">반복 안함</option>
						<option value="DAILY">매일</option>
						<option value="WEEKLY">매주</option>
						<option value="MONTHLY">매월</option>
						<option value="YEARLY">매년</option>
					</RepeatSelect>
					{formValues.repeat !== "none" && (
						<RepeatTermDiv>
							<LabelDiv>반복 기간</LabelDiv>
							<DateContainerDiv>
								<DateDiv>
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

									<DateInput
										type="time"
										value={formValues.untilTime}
										onChange={(e) =>
											setFormValues({
												...formValues,
												untilTime: e.target.value,
											})
										}
									/>
								</DateDiv>
							</DateContainerDiv>
						</RepeatTermDiv>
					)}
				</>
			)}
			<FooterDiv>
				<SubmitButton onClick={handleSubmit} disabled={!checkFieldsFilled()}>
					{edit ? "수정하기" : "저장하기"}
				</SubmitButton>
			</FooterDiv>
		</BaseModal>
	);
};

export default ScheduleModal;
