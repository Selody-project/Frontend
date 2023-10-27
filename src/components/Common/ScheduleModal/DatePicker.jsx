import React, { forwardRef, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";

import { ko } from "date-fns/locale";

import LeftArrowIcon from "@/assets/icon/ic-leftArrow.svg";
import RightArrowIcon from "@/assets/icon/ic-rightArrow.svg";

import { CustomDatePickerComponents } from "./ScheduleModal.styles";

const CustomInputButton = forwardRef(({ value, onClick }, ref) => {
	return (
		<CustomDatePickerComponents.CustomInputButton onClick={onClick} ref={ref}>
			{value}
		</CustomDatePickerComponents.CustomInputButton>
	);
});

const CustomHeader = ({
	date,
	decreaseMonth,
	increaseMonth,
	prevMonthButtonDisabled,
	nextMonthButtonDisabled,
}) => {
	return (
		<CustomDatePickerComponents.CustomHeader>
			<div>
				{date.getFullYear()}년 {date.getMonth() + 1}월
			</div>
			<div className="spacer" />
			<button
				aria-label="Previous Month"
				className="prev"
				onClick={decreaseMonth}
				disabled={prevMonthButtonDisabled}
				type="button"
			>
				<span>
					<LeftArrowIcon />
				</span>
			</button>
			<button
				aria-label="Next Month"
				onClick={increaseMonth}
				disabled={nextMonthButtonDisabled}
				type="button"
			>
				<span>
					<RightArrowIcon />
				</span>
			</button>
		</CustomDatePickerComponents.CustomHeader>
	);
};

const DatePicker = ({ minDateStr, selectedStr, onChange }) => {
	const [dateToChange, setDateToChange] = useState(new Date(selectedStr));
	const datePickerRef = useRef();
	const prevDateRef = useRef(new Date(selectedStr));

	const cancelDatePick = () => {
		setDateToChange(prevDateRef.current);
		onChange(prevDateRef.current);
		datePickerRef.current.setOpen(false);
	};

	const completeDatePick = () => {
		onChange(dateToChange);
		prevDateRef.current = dateToChange;
		datePickerRef.current.setOpen(false);
	};

	return (
		<CustomDatePickerComponents.DatePickerDiv>
			<ReactDatePicker
				ref={datePickerRef}
				locale={ko}
				customInput={<CustomInputButton />}
				renderCustomHeader={CustomHeader}
				dateFormat="yyyy년 MM월 dd일"
				popperPlacement="bottom-start"
				minDate={new Date(minDateStr)}
				selected={dateToChange}
				onChange={setDateToChange}
				shouldCloseOnSelect={false}
				onClickOutside={cancelDatePick}
			>
				<footer>
					<button type="button" onClick={cancelDatePick}>
						취소
					</button>
					<button type="button" onClick={completeDatePick}>
						확인
					</button>
				</footer>
			</ReactDatePicker>
		</CustomDatePickerComponents.DatePickerDiv>
	);
};

export default DatePicker;
