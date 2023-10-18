import React from "react";
import { useDispatch } from "react-redux";

import { useTheme } from "styled-components";

import DeleteScheduleIcon from "@/assets/icon/ic-delete-schedule.svg";
import EditScheduleIcon from "@/assets/icon/ic-edit-schedule.svg";
import { UI_TYPE } from "@/constants/uiConstans";
import { deleteSchedule } from "@/features/schedule/schedule-service";
import { openScheduleEditModal } from "@/features/ui/ui-slice";
import { checkIsAlldaySchedule } from "@/utils/calendarUtils";

import {
	ColoredCircleDiv,
	ScheduleItemContentDiv,
	ScheduleItemDiv,
	ScheduleItemRightButtonsDiv,
} from "./ScheduleItem.styles";

const getTimeString = (start, end) => {
	const isAllday = checkIsAlldaySchedule(start, end);
	const startDate = new Date(start);
	const endDate = new Date(end);
	const startDateString = `${
		startDate.getMonth() + 1
	}월 ${startDate.getDate()}일`;
	if (isAllday) {
		return `${startDateString} 하루 종일`;
	}
	const startTimeString = `${
		startDate.getHours() < 10
			? `0${startDate.getHours()}`
			: startDate.getHours()
	}:${
		startDate.getMinutes() < 10
			? `0${startDate.getMinutes()}`
			: startDate.getMinutes()
	}`;
	let endDateString = `${endDate.getMonth() + 1}월 ${endDate.getDate()}일`;
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
	if (isOnlyToday || checkIsAlldaySchedule(start, end)) {
		endDateString = null;
	}
	return `${startDateString} ${startTimeString} ~ ${
		endDateString || ""
	} ${endTimeString}`;
};

const ScheduleItem = ({
	schedule: { id, isGroup, title, startDateTime, endDateTime, recurrence },
}) => {
	const { colors } = useTheme();
	const dispatch = useDispatch();

	const handleDeleteSchedule = () => {
		const ok = window.confirm("이 일정을 삭제하겠습니까?");
		if (ok) {
			dispatch(deleteSchedule(id));
		}
	};

	return (
		<ScheduleItemDiv>
			<ColoredCircleDiv
				bgColor={isGroup ? colors.sunday : colors.disabled_text}
			/>
			<ScheduleItemContentDiv>
				<div>
					<h3>{title}</h3>
					{recurrence === 1 && (
						<>
							&nbsp;
							<span className="recur">반복</span>
						</>
					)}
				</div>
				<span>{getTimeString(startDateTime, endDateTime)}</span>
			</ScheduleItemContentDiv>
			<ScheduleItemRightButtonsDiv>
				<button
					type="button"
					aria-label="editSchedule"
					onClick={() =>
						dispatch(
							openScheduleEditModal({
								type: isGroup
									? UI_TYPE.SHARE_SCHEDULE
									: UI_TYPE.PERSONAL_SCHEDULE,
								id,
							}),
						)
					}
				>
					<EditScheduleIcon />
				</button>
				<button
					type="button"
					aria-label="deleteSchedule"
					onClick={handleDeleteSchedule}
				>
					<DeleteScheduleIcon />
				</button>
			</ScheduleItemRightButtonsDiv>
		</ScheduleItemDiv>
	);
};

export default ScheduleItem;
