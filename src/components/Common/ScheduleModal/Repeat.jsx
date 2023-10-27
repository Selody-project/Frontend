import React from "react";

import PropTypes from "prop-types";

import DatePicker from "@/components/Common/ScheduleModal/DatePicker";

import { InputLabel, StyledSelect } from "./ScheduleModal.styles";

const Repeat = ({
	freq,
	until,
	minUntil,
	onFreqChange,
	onToggleUntilOrNot,
	onUntilChange,
}) => {
	return (
		<div>
			<div>
				<InputLabel htmlFor="frequency">반복 여부</InputLabel>
				<StyledSelect id="frequency" value={freq} onChange={onFreqChange}>
					<option value="NONE">반복 안함</option>
					<option value="DAILY">매일</option>
					<option value="DAILY_N">N일 간격</option>
					<option value="WEEKLY">매주</option>
					<option value="WEEKLY_N">N주 간격</option>
					<option value="MONTHLY">매월</option>
					<option value="MONTHLY_N">N개월 간격</option>
					<option value="YEARLY">매년</option>
					<option value="YEARLY_N">N년 간격</option>
				</StyledSelect>
			</div>
			{freq !== "NONE" && (
				<>
					<div>
						<InputLabel htmlFor="untilOrNot">반복 종료</InputLabel>
						<StyledSelect
							id="untilOrNot"
							value={until === "" ? "NO" : "YES"}
							onChange={onToggleUntilOrNot}
						>
							<option value="NO">안 함</option>
							<option value="YES">날짜</option>
						</StyledSelect>
					</div>
					{until !== "" && (
						<div>
							<InputLabel htmlFor="until">반복 종료 날짜</InputLabel>
							<DatePicker
								id="until"
								minDateStr={minUntil}
								selectedStr={until}
								onChange={onUntilChange}
							/>
						</div>
					)}
				</>
			)}
		</div>
	);
};

Repeat.propTypes = {
	freq: PropTypes.oneOf([
		"NONE",
		"DAILY",
		"DAILY_N",
		"WEEKLY",
		"WEEKLY_N",
		"MONTHLY",
		"MONTHLY_N",
		"YEARLY",
		"YEARLY_N",
	]).isRequired,
	until: PropTypes.string.isRequired,
	minUntil: PropTypes.string.isRequired,
	onFreqChange: PropTypes.func.isRequired,
	onUntilChange: PropTypes.func.isRequired,
};

export default Repeat;
