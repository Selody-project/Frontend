import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { SCHEDULE_MODAL_TYPE } from "@/constants/uiConstants";
import useOutsideClick from "@/hooks/useOutsideClick";

import { CustomTimePickerComponents } from "./Picker.styles";

const IS_AM_OR_NOT = [true, false];
const HOURS_12 = Array.from({ length: 12 }).map((_, index) => index);
const MINUTES = Array.from({ length: 60 }).map(
	(_, index) => `${index < 10 ? `0${index}` : index}`,
);

const get12HoursString = (hours) => {
	if (hours === 12) {
		return 12;
	}
	if (hours === 22 || hours === 23 || hours === 10 || hours === 11) {
		return hours % 12;
	}
	return `0${hours % 12}`;
};

const get24hoursString = (isAM, hours) => {
	hours += isAM ? 0 : 12;
	if (hours < 10) {
		return `0${hours}`;
	}
	return hours;
};

const TimePicker = ({
	isOpen,
	onOpen,
	onClose,
	selected,
	onChange,
	min,
	isModalPositionTopLeft = true,
}) => {
	const [selectedHours, selectedMinutes] = selected.split(":");

	const initialTimeString = selectedHours >= 12 ? "오후" : "오전";
	const initialButtonText = `${initialTimeString} ${get12HoursString(
		Number(selectedHours),
	)}:${selectedMinutes}`;

	const { isLoading, scheduleModalMode } = useSelector(({ ui }) => ui);
	const [isAM, setIsAM] = useState(Number(selectedHours) < 12);
	const [hours, setHours] = useState(
		Number(selectedHours) === 12 ? 12 : Number(selectedHours) % 12,
	);
	const [minutes, setMinutes] = useState(Number(selectedMinutes));

	const timePickerRef = useRef();
	const selectedButtonRefs = useRef([]);

	const resetTimeValues = () => {
		setIsAM(Number(selectedHours) < 12);
		setHours(Number(selectedHours) % 12);
		setMinutes(Number(selectedMinutes));
	};

	const cancelTimePick = () => {
		resetTimeValues();
		onClose();
	};

	useOutsideClick(timePickerRef, () => isOpen && cancelTimePick());

	const handleSubmitTime = () => {
		onChange(
			`${get24hoursString(isAM, hours)}:${
				minutes < 10 ? `0${minutes}` : minutes
			}`,
		);
		onClose();
	};

	const isMinPM = min && Number(min.substr(0, 2)) >= 12;

	useEffect(() => {
		resetTimeValues();
		if (isOpen) {
			selectedButtonRefs.current?.forEach((el) => {
				el.scrollIntoView(true);
			});
		}
	}, [selected, isOpen]);

	return (
		<CustomTimePickerComponents.TImePickerWrapperDiv ref={timePickerRef}>
			<CustomTimePickerComponents.CustomInputButton
				isTime={true}
				value={selected}
				onClick={onOpen}
				disabled={isLoading || scheduleModalMode === SCHEDULE_MODAL_TYPE.VIEW}
			>
				{initialButtonText}
			</CustomTimePickerComponents.CustomInputButton>
			<CustomTimePickerComponents.CustomTimePicker
				ref={timePickerRef}
				isOpen={isOpen}
				isModalPositionTopLeft={isModalPositionTopLeft}
			>
				<div>
					<div className="timeString">
						{IS_AM_OR_NOT.map((isAMButton) => (
							<button
								key={isAMButton}
								type="button"
								ref={
									(isAM && isAMButton) || (!isAM && !isAMButton)
										? (el) => {
												selectedButtonRefs.current[0] = el;
										  }
										: undefined
								}
								className={
									(isAM && isAMButton) || (!isAM && !isAMButton)
										? "selected"
										: undefined
								}
								disabled={isMinPM && isAMButton}
								onClick={() => setIsAM(isAMButton)}
							>
								{isAMButton ? "오전" : "오후"}
							</button>
						))}
					</div>
					<div className="hours">
						{HOURS_12.map((value) => (
							<button
								key={value}
								type="button"
								ref={
									hours === value
										? (el) => {
												selectedButtonRefs.current[1] = el;
										  }
										: undefined
								}
								className={hours === value ? "selected" : ""}
								disabled={
									min &&
									isAM === min.substr(0, 2) < 12 &&
									value < Number(min.substr(0, 2)) % 12
								}
								onClick={() => setHours(value)}
							>
								{!isAM && !value ? 12 : value}
							</button>
						))}
					</div>
					<div className="minutes">
						{MINUTES.map((value) => (
							<button
								key={value}
								type="button"
								ref={
									minutes === Number(value)
										? (el) => {
												selectedButtonRefs.current[2] = el;
										  }
										: undefined
								}
								className={minutes === Number(value) ? "selected" : ""}
								disabled={
									min &&
									isAM === min.substr(0, 2) < 12 &&
									hours === min.substr(0, 2) % 12 &&
									Number(value) < Number(min.substr(3, 2))
								}
								onClick={() => setMinutes(Number(value))}
							>
								{value}
							</button>
						))}
					</div>
				</div>
				<div>
					<button type="button" onClick={cancelTimePick}>
						취소
					</button>
					<button type="button" onClick={handleSubmitTime} className="confirm">
						확인
					</button>
				</div>
			</CustomTimePickerComponents.CustomTimePicker>
		</CustomTimePickerComponents.TImePickerWrapperDiv>
	);
};

export default TimePicker;
