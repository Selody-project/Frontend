import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

import { SCHEDULE_TYPE } from "@/constants/calendarConstants";
import { getSchedulesSummary } from "@/features/schedule/schedule-service";
import {
	resetCurrentDate,
	setCurrentMonth,
	setCurrentWeek,
	setCurrentYear,
} from "@/features/schedule/schedule-slice";
import {
	convertByweekdayNumberToString,
	getCurrentWeek,
	getFirstDateOfWeek,
} from "@/utils/calendarUtils";

import { CalendarContainerDiv } from "./CalendarContainer.styles";
import CustomCalendar from "./CustomCalendar/CustomCalendar";
import InviteUser from "../../SharePage/InviteUser";

const CalendarContainer = ({ type }) => {
	const dispatch = useDispatch();

	const calendarRef = useRef(null);

	const { calendarSchedules } = useSelector((state) => state.schedule);

	const [selectedGroup, setSelectedGroup] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
	const [inviteInput, setInviteInput] = useState("");
	const [invitationLink, setInvitationLink] = useState("");

	const schedulesToInjectIntoCalendar = calendarSchedules.map((schedule) =>
		schedule.recurrence
			? {
					id: schedule.id,
					userId: schedule.userId,
					rrule: {
						freq: schedule.freq.toLowerCase(),
						interval: schedule.interval,
						byweekday: convertByweekdayNumberToString(schedule.byweekday),
						dtstart: schedule.startDateTime,
						until: moment(schedule.endRecur).format("YYYY-MM-DD"),
					},
					duration:
						new Date(schedule.endDateTime) - new Date(schedule.startDateTime),
			  }
			: {
					id: schedule.id,
					userId: schedule.userId,
					start: new Date(schedule.startDateTime),
					end: new Date(schedule.endDateTime),
			  },
	);

	const updateDateState = (year, month, week) => {
		dispatch(setCurrentMonth(month));
		dispatch(setCurrentYear(year));
		// 리스트 보기여서 select에서 제공된 주차의 경우
		if (week) {
			return dispatch(setCurrentWeek(week));
		}
		// 월별 보기인데 현재 날짜에 해당하는 년월인 경우
		if (
			new Date().getMonth() + 1 === Number(month) &&
			new Date().getFullYear() === Number(year)
		) {
			return dispatch(setCurrentWeek(getCurrentWeek()));
		}
		// 그 외 모든 월별 보기의 경우
		return dispatch(setCurrentWeek(1));
	};

	const handleDateChange = (year, month, week = null) => {
		const calendarApi = calendarRef.current.getApi();

		if (week) {
			// 리스트(주별) 보기인 경우
			const startDate = getFirstDateOfWeek(year, month, week);
			calendarApi.gotoDate(
				new Date(
					year,
					(startDate > 20 && Number(week) === 1 ? month - 1 : month) - 1,
					startDate,
				),
			);
		} else if (
			!week &&
			new Date().getMonth() + 1 === Number(month) &&
			new Date().getFullYear() === Number(year)
		) {
			// 월별 보기인데, 현재 날짜를 포함한 년월인 경우
			const startDateForToday = getFirstDateOfWeek(
				year,
				month,
				getCurrentWeek(),
			);
			calendarApi.gotoDate(new Date(year, month - 1, startDateForToday));
		} else {
			// 월별 보기에서 그 외 년월인 경우
			calendarApi.gotoDate(new Date(year, month - 1));
		}
		updateDateState(year, month, week);
	};

	const handleInviteButtonClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
		setInviteInput("");
	};

	const handleSendInvite = () => {
		setAnchorEl(null);
		setInviteInput("");
	};

	useEffect(() => {
		dispatch(getSchedulesSummary({ isGroup: false }));

		return () => dispatch(resetCurrentDate());
	}, []);

	return (
		<CalendarContainerDiv>
			{type === SCHEDULE_TYPE.SHARED && (
				<InviteUser
					selectedGroup={selectedGroup}
					setSelectedGroup={setSelectedGroup}
					handleInviteButtonClick={handleInviteButtonClick}
					anchorEl={anchorEl}
					handleCloseMenu={handleCloseMenu}
					inviteInput={inviteInput}
					setInviteInput={setInviteInput}
					handleSendInvite={handleSendInvite}
					invitationLink={invitationLink}
					setInvitationLink={setInvitationLink}
				/>
			)}
			<CustomCalendar
				ref={calendarRef}
				fullCalendarEvents={schedulesToInjectIntoCalendar}
				handleDateChange={handleDateChange}
			/>
		</CalendarContainerDiv>
	);
};

export default CalendarContainer;
