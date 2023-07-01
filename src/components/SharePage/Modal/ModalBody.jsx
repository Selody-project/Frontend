import React from "react";
import { Form } from "react-bootstrap";
import {
	ModalTitle,
	ModalInput,
	ModalInputGap,
	ModalTextarea,
	ModalDateRow,
	ModalDateColumn,
} from "./Modal.styles";

const ModalBody = ({ formValues, setFormValues, today }) => {
	return (
		<>
			<ModalTitle
				id="title"
				type="text"
				placeholder="일정 제목"
				value={formValues.title}
				onChange={(e) =>
					setFormValues({ ...formValues, title: e.target.value })
				}
			/>
			<ModalTextarea
				id="details"
				rows="5"
				placeholder="상세 내용"
				value={formValues.details}
				onChange={(e) =>
					setFormValues({ ...formValues, details: e.target.value })
				}
			/>
			<Form.Label>
				{formValues.repeat === "none" ? "날짜 및 시간" : "반복 일정"}
			</Form.Label>
			<ModalDateRow>
				<ModalDateColumn>
					<ModalInput
						type="date"
						min={today}
						value={formValues.startDate}
						onChange={(e) =>
							setFormValues({ ...formValues, startDate: e.target.value })
						}
					/>
					<ModalInputGap />
					<ModalInput
						type="time"
						value={formValues.startTime}
						onChange={(e) =>
							setFormValues({ ...formValues, startTime: e.target.value })
						}
					/>
				</ModalDateColumn>
				~
				<ModalDateColumn>
					<ModalInput
						type="date"
						min={formValues.startDate || today}
						value={formValues.endDate}
						onChange={(e) =>
							setFormValues({ ...formValues, endDate: e.target.value })
						}
					/>
					<ModalInputGap />
					<ModalInput
						type="time"
						value={formValues.endTime}
						onChange={(e) =>
							setFormValues({ ...formValues, endTime: e.target.value })
						}
					/>
				</ModalDateColumn>
			</ModalDateRow>
			<Form.Label>일정 투표 종료일</Form.Label>
			<ModalDateColumn>
				<ModalInput
					type="date"
					min={formValues.startDate || today}
					value={formValues.voteEndDate}
					onChange={(e) =>
						setFormValues({ ...formValues, voteEndDate: e.target.value })
					}
				/>
				<ModalInputGap />
				<ModalInput
					type="time"
					value={formValues.voteEndTime}
					onChange={(e) =>
						setFormValues({ ...formValues, voteEndTime: e.target.value })
					}
				/>
			</ModalDateColumn>
		</>
	);
};

export default ModalBody;
