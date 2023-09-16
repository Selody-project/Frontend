import React from "react";

import DeleteScheduleIcon from "@/assets/icon/ic-delete-schedule.svg";
import EditScheduleIcon from "@/assets/icon/ic-edit-schedule.svg";

import {
	ScheduleItemContentDiv,
	ScheduleItemDiv,
	ScheduleItemRightButtonsDiv,
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
	return (
		<ScheduleItemDiv>
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
