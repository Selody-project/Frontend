import React from "react";

import moment from "moment";
import PropTypes from "prop-types";

import DatePicker from "./DatePicker";
import {
	DateInput,
	DateDiv,
	DateContainerDiv,
	InputLabel,
} from "./ScheduleModal.styles";

const DateAndTime = ({
	startDate,
	startTime,
	endDate,
	endTime,
	onDateChange,
	onTimeChange,
}) => {
	const minStartDate = moment(
		new Date(new Date().setMonth(new Date().getMonth() - 6)),
	).format("YYYY-MM-DD");

	return (
		<>
			<InputLabel htmlFor="startDate">날짜 및 시간</InputLabel>
			<DateContainerDiv>
				<DateDiv>
					<DatePicker
						id="startDate"
						minDateStr={minStartDate}
						selectedStr={startDate}
						onChange={(date) => onDateChange(date, "startDate")}
					/>
					<DateInput
						id="startTime"
						type="time"
						value={startTime}
						onChange={onTimeChange}
					/>
				</DateDiv>
				~
				<DateDiv>
					<DatePicker
						id="startDate"
						minDateStr={startDate}
						selectedStr={endDate}
						onChange={(date) => onDateChange(date, "endDate")}
					/>
					<DateInput
						id="endTime"
						type="time"
						min={startDate === endDate ? startTime : undefined}
						value={endTime}
						onChange={onTimeChange}
					/>
				</DateDiv>
			</DateContainerDiv>
		</>
	);
};

DateAndTime.propTypes = {
	startDate: PropTypes.string.isRequired,
	startTime: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	endTime: PropTypes.string.isRequired,
	onDateChange: PropTypes.func.isRequired,
	onTimeChange: PropTypes.func.isRequired,
};

export default DateAndTime;
