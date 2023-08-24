import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import CALENDAR_COLORS from "@/constants/calendar/calendarColors";
import SCHEDULE_TYPE from "@/constants/calendar/scheduleType";
import { setEdit } from "@/features/auth/auth-slice";
import {
	currentMonthFn,
	currentYearFn,
	setId,
} from "@/features/schedule/schedule-slice";
import { openModal } from "@/features/ui/ui-slice";
import { getRandomColor } from "@/utils/color";

import { CalendarContainerDiv } from "./CalendarContainer.styles";
import CustomCalendar from "./CustomCalendar/CustomCalendar";
import InviteUser from "../../SharePage/InviteUser";

const CalendarContainer = ({ type }) => {
	const currentWeekStart = new Date();
	const dispatch = useDispatch();
	const calendarRef = useRef(null);
	const eventColorMap = useRef({});
	const { schedule, recSchedules } = useSelector((state) => state.schedule);
	const [selectedGroup, setSelectedGroup] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
	const [inviteInput, setInviteInput] = useState("");
	const [invitationLink, setInvitationLink] = useState("");
	const [events, setEvents] = useState([]);
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	const fullCalendarEvents = events.map((event) => ({
		title: event.text,
		start: event.start.toISOString().replace(".000Z", ""),
		end: event.end.toISOString().replace(".000Z", ""),
		color:
			event.colors !== ""
				? event.colors
				: CALENDAR_COLORS[events.indexOf(event) % CALENDAR_COLORS.length],
	}));

	const updateCurrentMonth = () => {
		const calendarApi = calendarRef.current.getApi();
		const calendarDate = calendarApi.getDate();
		setCurrentMonth(calendarDate.getMonth() + 1);
		setCurrentYear(calendarDate.getFullYear());
	};

	const handleDateChange = (year, month) => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.gotoDate(new Date(year, month));
		updateCurrentMonth();
	};

	const getColorForEvent = (eventId) => {
		if (!eventColorMap.current[eventId]) {
			eventColorMap.current[eventId] = getRandomColor();
		}
		return eventColorMap.current[eventId];
	};

	const menuHandler = () => {
		dispatch(setEdit(true));
		dispatch(openModal({ type: SCHEDULE_TYPE.PERSONAL }));
		// console.log(schedule[0].id);
		dispatch(setId(schedule.id));
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

	// useEffect(() => {
	// 	dispatch(getGroupList());
	// }, [dispatch]);

	useEffect(() => {
		dispatch(currentMonthFn(currentMonth));
		dispatch(currentYearFn(currentYear));
	}, [currentMonth]);

	useEffect(() => {
		currentWeekStart.setDate(
			currentWeekStart.getDate() - currentWeekStart.getDay(),
		);
	}, [currentWeekStart]);

	useEffect(() => {
		const scheduleEvents = schedule.map((event) => {
			const startDate = new Date(event.startDateTime);
			const endDate = new Date(event.endDateTime);

			return {
				start: startDate,
				end: endDate,
				text: event.title,
				colors: getColorForEvent(event.id),
			};
		});

		const recSchedule = recSchedules
			.map((rec) => {
				const color = getColorForEvent(rec.id);

				return rec.recurrenceDateList.map((event) => {
					const startDate = new Date(event.startDateTime);
					const endDate = new Date(event.endDateTime);

					return {
						start: startDate,
						end: endDate,
						text: rec.title,
						colors: color,
					};
				});
			})
			.flat();

		setEvents([...scheduleEvents, ...recSchedule]);
	}, [schedule, recSchedules]);

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
				fullCalendarEvents={fullCalendarEvents}
				currentYear={currentYear}
				currentMonth={currentMonth}
				handleDateChange={handleDateChange}
				menuHandler={type === SCHEDULE_TYPE.PERSONAL && menuHandler}
			/>
		</CalendarContainerDiv>
	);
};

export default CalendarContainer;
