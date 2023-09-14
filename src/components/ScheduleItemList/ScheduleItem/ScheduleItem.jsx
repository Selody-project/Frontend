import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useTheme } from "styled-components";

import DeleteScheduleWarningModal from "@/components/Common/Modal/DeleteScheduleWarningModal/DeleteScheduleWarningModal";
import {
	DeleteScheduleIcon,
	EditScheduleIcon,
} from "@/constants/iconConstants";
import { UI_TYPE } from "@/constants/uiConstants";
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
	const dispatch = useDispatch();
	const { colors } = useTheme();
	const [isDeleteWarningModalOn, setIsDeleteWarningModalOn] = useState(false);

	return (
		<>
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
								<span className="recur" data-testid="recurreningText">
									반복
								</span>
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
						onClick={() => setIsDeleteWarningModalOn(true)}
					>
						<DeleteScheduleIcon />
					</button>
				</ScheduleItemRightButtonsDiv>
			</ScheduleItemDiv>
			{isDeleteWarningModalOn && (
				<DeleteScheduleWarningModal
					onCancel={() => setIsDeleteWarningModalOn(false)}
					onDelete={() => dispatch(deleteSchedule(id))}
				/>
			)}
		</>
	);
};

export default ScheduleItem;
