import React from "react";

import PropTypes from "prop-types";

import { ByweekdayPickerDiv } from "./ScheduleModal.styles";

const WEEK_STRING_PAIRS = [
	["SU", "일"],
	["MO", "월"],
	["TU", "화"],
	["WE", "수"],
	["TH", "목"],
	["FR", "금"],
	["SA", "토"],
];

export const getRecurringString = (freqEndsWithN) => {
	if (!freqEndsWithN.endsWith("N")) {
		throw new Error("반복 텍스트는 freq가 N으로 끝나는 경우에만 return합니다");
	}
	if (freqEndsWithN.startsWith("DAILY")) {
		return "일";
	}
	if (freqEndsWithN.startsWith("WEEKLY")) {
		return "주";
	}
	if (freqEndsWithN.startsWith("MONTHLY")) {
		return "개월";
	}
	return "년";
};

const RepeatDetail = ({
	isWeekly,
	isWithN,
	freq,
	interval,
	byweekday,
	onByweekdayChange,
	onIntervalChange,
}) => {
	return (
		<div>
			{isWeekly && (
				<ByweekdayPickerDiv>
					{WEEK_STRING_PAIRS.map(([EN, KR], index) => (
						<label key={EN} htmlFor={EN}>
							<span>{KR}</span>
							<div>
								<input
									type="checkbox"
									id={EN}
									checked={byweekday.indexOf(index) !== -1}
									onChange={(event) => onByweekdayChange(event, index)}
								/>
							</div>
						</label>
					))}
				</ByweekdayPickerDiv>
			)}
			{isWithN && (
				<div className="interval_N">
					<input
						id="interval"
						type="number"
						step={1}
						min={1}
						value={interval}
						onChange={onIntervalChange}
					/>
					<span>{`${getRecurringString(freq)} 간격으로 반복합니다.`}</span>
				</div>
			)}
		</div>
	);
};

RepeatDetail.propTypes = {
	isWeekly: PropTypes.bool.isRequired,
	isWithN: PropTypes.bool.isRequired,
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
	interval: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	byweekday: PropTypes.arrayOf(PropTypes.number).isRequired,
	onByweekdayChange: PropTypes.func.isRequired,
	onIntervalChange: PropTypes.func.isRequired,
};

export default RepeatDetail;
