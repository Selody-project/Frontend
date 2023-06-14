import React from "react";
import { Form, Row, Col } from "react-bootstrap";
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

			<Form.Label>날짜 및 시간</Form.Label>
			{formValues.repeat === "none" && (
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
			)}
			<hr />
			<Row>
				<Col>
					<Form.Group controlId="repeat">
						<Form.Label>반복 여부</Form.Label>
						<Form.Select
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
						</Form.Select>
					</Form.Group>
				</Col>
				<Col>
					<Form.Label>반복 기간</Form.Label>
					<ModalDateColumn>
						<ModalInput
							type="date"
							min={today}
							value={formValues.untilDate}
							onChange={(e) =>
								setFormValues({ ...formValues, untilDate: e.target.value })
							}
						/>
						<ModalInputGap />
						<ModalInput
							type="time"
							value={formValues.untilTime}
							onChange={(e) =>
								setFormValues({ ...formValues, untilTime: e.target.value })
							}
						/>
					</ModalDateColumn>
				</Col>
			</Row>
			<hr />
		</>
	);
};

export default ModalBody;
