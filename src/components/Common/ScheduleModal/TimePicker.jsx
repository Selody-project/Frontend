import React, { useEffect, useRef, useState } from "react";

import { CustomTimePickerComponents } from "@/components/Common/ScheduleModal/ScheduleModal.styles";
import useOutsideClick from "@/hooks/useOutsideClick";

const TIME_STRING = ["오전", "오후"];
const getHours = (isAM) => {
	const hours = Array.from({ length: 12 }).map((_, index) => index);
	if (!isAM) {
		hours[0] = 12;
	}
	return hours;
};
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

	const initialTimeString =
		selectedHours >= 12 ? TIME_STRING[1] : TIME_STRING[0];
	const initialButtonText = `${initialTimeString} ${get12HoursString(
		Number(selectedHours),
	)}:${selectedMinutes}`;

	const [isAM, setIsAM] = useState(Number(selectedHours) < 12);
	const [hours, setHours] = useState(
		Number(selectedHours) === 12 ? 12 : Number(selectedHours) % 12,
	);
	const [minutes, setMinutes] = useState(Number(selectedMinutes));

	const timePickerRef = useRef();

	const resetTimeValues = () => {
		setIsAM(Number(selectedHours) < 12);
		setHours(Number(selectedHours) === 12 ? 12 : Number(selectedHours) % 12);
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

	const isMinPM = min && Number(min.substr(0, 2)) >= 10;

	useEffect(() => {
		resetTimeValues();
	}, [selected]);

	return (
		<CustomTimePickerComponents.TImePickerWrapperDiv ref={timePickerRef}>
			<CustomTimePickerComponents.CustomInputButton
				isTime={true}
				value={selected}
				onClick={onOpen}
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
						{TIME_STRING.map((str, index) => (
							<button
								key={str}
								type="button"
								className={
									(isAM && !index) || (!isAM && index) ? "selected" : undefined
								}
								disabled={isMinPM && !index}
								onClick={() => setIsAM(!index)}
							>
								{str}
							</button>
						))}
					</div>
					<div className="hours">
						{getHours(isAM).map((value) => (
							<button
								key={value}
								type="button"
								className={`${hours === value ? "selected" : ""}`}
								disabled={min && value < Number(min.substr(0, 2)) % 12}
								onClick={() => setHours(value)}
							>
								{value}
							</button>
						))}
					</div>
					<div className="minutes">
						{MINUTES.map((value) => (
							<button
								key={value}
								type="button"
								className={`${minutes === Number(value) ? "selected" : ""}`}
								disabled={
									min &&
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
