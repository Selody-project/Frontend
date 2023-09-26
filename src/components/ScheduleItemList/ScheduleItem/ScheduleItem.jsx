import React from "react";

import { useTheme } from "styled-components";

import DeleteScheduleIcon from "@/assets/icon/ic-delete-schedule.svg";
import EditScheduleIcon from "@/assets/icon/ic-edit-schedule.svg";

import {
	ColoredCircleDiv,
	ScheduleItemContentDiv,
	ScheduleItemDiv,
	ScheduleItemRightButtonsDiv,
} from "./ScheduleItem.styles";

const getTimeString = (start, end) => {
	const startDate = new Date(start);
	const endDate = new Date(end);
	const startDateString = `${startDate.getMonth()}월 ${startDate.getDate()}일`;
	const startTimeString = `${
		startDate.getHours() < 10
			? `0${startDate.getHours()}`
			: startDate.getHours()
	}:${
		startDate.getMinutes() < 10
			? `0${startDate.getMinutes()}`
			: startDate.getMinutes()
	}`;
	let endDateString = `${endDate.getMonth()}월 ${endDate.getDate()}일`;
	const endTimeString = `${
		// eslint-disable-next-line no-nested-ternary
		!endDate.getHours() && !endDate.getMinutes()
			? 24
			: endDate.getHours() < 10
			? `0${endDate.getHours()}`
			: endDate.getHours()
	}:${
		endDate.getMinutes() < 10
			? `0${endDate.getMinutes()}`
			: endDate.getMinutes()
	}`;

	const isOnlyToday = startDate.toDateString() === endDate.toDateString();
	const isAllDay =
		new Date(startDate.setDate(startDate.getDate() + 1)).toDateString() ===
			endDate.toDateString() &&
		!endDate.getHours() &&
		!endDate.getMinutes();
	if (isOnlyToday || isAllDay) {
		endDateString = null;
	}
	return `${startDateString} ${startTimeString} ~ ${
		endDateString || ""
	} ${endTimeString}`;
};

const ScheduleItem = ({
	schedule: { title, startDateTime, endDateTime, isGroup },
}) => {
	const { colors } = useTheme();
	return (
		<ScheduleItemDiv>
			<ColoredCircleDiv
				bgColor={isGroup ? colors.sunday : colors.disabled_text}
			/>
			<ScheduleItemContentDiv>
				<span>{title}</span>
				<span>{getTimeString(startDateTime, endDateTime)}</span>
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
