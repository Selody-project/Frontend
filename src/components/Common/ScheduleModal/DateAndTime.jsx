import React from "react";

import moment from "moment";
import PropTypes from "prop-types";

import {
	DateInput,
	DateDiv,
	DateContainerDiv,
	InputLabel,
	AllDayCheckBoxDiv,
} from "./ScheduleModal.styles";

const DateAndTime = ({
	startDate,
	startTime,
	endDate,
	endTime,
	isAllDay,
	onDateChange,
	onTimeChange,
	onIsAllDayChange,
}) => {
	const minStartDate = moment(
		new Date(new Date().setMonth(new Date().getMonth() - 6)),
	).format("YYYY-MM-DD");

	return (
		<>
			<InputLabel htmlFor="startDate">날짜 및 시간</InputLabel>
			<DateContainerDiv>
				<DateDiv>
					<DateInput
						id="startDate"
						type="date"
						min={minStartDate}
						value={startDate}
						onChange={onDateChange}
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
					<DateInput
						id="endDate"
						type="date"
						disabled={!startDate}
						min={startDate}
						value={endDate}
						onChange={onDateChange}
					/>
					<DateInput
						id="endTime"
						type="time"
						min={startDate === endDate ? startTime : undefined}
						value={endTime}
						onChange={onTimeChange}
					/>
				</DateDiv>
				{startDate && (
					<AllDayCheckBoxDiv>
						<label>
							<input
								type="checkbox"
								onChange={onIsAllDayChange}
								checked={isAllDay}
							/>
							하루 종일
						</label>
					</AllDayCheckBoxDiv>
				)}
			</DateContainerDiv>
		</>
	);
};

DateAndTime.propTypes = {
	startDate: PropTypes.string.isRequired,
	startTime: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	endTime: PropTypes.string.isRequired,
	isAllDay: PropTypes.bool.isRequired,
	onDateChange: PropTypes.func.isRequired,
	onTimeChange: PropTypes.func.isRequired,
	onIsAllDayChange: PropTypes.func.isRequired,
};

export default DateAndTime;
