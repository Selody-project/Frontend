import React, { useState } from "react";

import CheckedCircleIcon from "@/assets/icon/ic-checked-circle.svg";
import DeleteScheduleIcon from "@/assets/icon/ic-delete-schedule.svg";
import EditScheduleIcon from "@/assets/icon/ic-edit-schedule.svg";
import EmptyCircleIcon from "@/assets/icon/ic-empty-circle.svg";

import {
	ScheduleItemContentDiv,
	ScheduleItemDiv,
	ScheduleItemRightButtonsDiv,
	ToggleButton,
} from "./ScheduleItem.styles";

const getTimeString = (date, isEnd = false) => {
	const todayMonth = date.getMonth();
	const todayDate = date.getDate();
	const todayHours = `${
		// eslint-disable-next-line no-nested-ternary
		date.getHours() === 12
			? `오후 12`
			: date.getHours() > 12
			? `오후 ${date.getHours() - 12}`
			: `오전 ${date.getHours()}`
	}`;
	const todayMinutes = `${
		date.getMinutes() >= 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`
	}`;
	return `${
		!isEnd ? `${todayMonth}월 ${todayDate}일 ` : ""
	}${todayHours}:${todayMinutes}`;
};

const ScheduleItem = ({ schedule: { title, start, end } }) => {
	const [isDone, setIsDone] = useState(false);

	const toggleIsDone = () => setIsDone((prev) => !prev);

	return (
		<ScheduleItemDiv>
			<ToggleButton onClick={toggleIsDone}>
				{isDone ? <CheckedCircleIcon /> : <EmptyCircleIcon />}
			</ToggleButton>
			<ScheduleItemContentDiv>
				<span>{title}</span>
				<span>
					{getTimeString(start)} ~ {getTimeString(end, true)}
				</span>
			</ScheduleItemContentDiv>
			<ScheduleItemRightButtonsDiv>
				<button type="button" aria-label="editSchedule">
					<EditScheduleIcon />
				</button>
				<button type="button" aria-label="deleteSchedule">
					<DeleteScheduleIcon />
				</button>
			</ScheduleItemRightButtonsDiv>
		</ScheduleItemDiv>
	);
};

export default ScheduleItem;
