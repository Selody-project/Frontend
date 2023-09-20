import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CALENDAR_COLORS, SCHEDULE_TYPE } from "@/constants/calendarConstants";
import {
	currentMonthFn,
	currentYearFn,
} from "@/features/schedule/schedule-slice";
import { openScheduleEditModal } from "@/features/ui/ui-slice";
import { getRandomColor } from "@/utils/color";

import { CalendarContainerDiv } from "./CalendarContainer.styles";
import CustomCalendar from "./CustomCalendar/CustomCalendar";
import InviteUser from "../../SharePage/InviteUser";

// 리스트(주마다 보기)로 진행했을 떄 보여줄 첫 일요일을 계산합니다.
const getFirstDateOfWeek = (year, month, week) => {
	const firstDateOfMonth = new Date(year, month - 1);
	const firstDayOfMonth = firstDateOfMonth.getDay();
	firstDateOfMonth.setDate(
		firstDateOfMonth.getDate() - firstDayOfMonth + 7 * (week - 1),
	);
	return firstDateOfMonth.getDate();
};

// currentWeek 초기화를 위해 현재 몇 주차인지 계산합니다.
const getCurrentWeek = () => {
	const today = new Date();
	const date = today.getDate();
	const day = today.getDay(); // 0~6;
	const firstDateOfWeek = date - day;
	const currentWeekNum = Math.ceil((firstDateOfWeek - 1) / 7) + 1;
	return currentWeekNum;
};

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
	const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());
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

	const updateDateState = (year, month, week) => {
		setCurrentMonth(month);
		setCurrentYear(year);
		// 리스트 보기여서 select에서 제공된 주차의 경우
		if (week) {
			return setCurrentWeek(week);
		}
		// 월별 보기인데 현재 날짜에 해당하는 년월인 경우
		if (
			new Date().getMonth() + 1 === Number(month) &&
			new Date().getFullYear() === Number(year)
		) {
			return setCurrentWeek(getCurrentWeek());
		}
		// 그 외 모든 월별 보기의 경우
		return setCurrentWeek(1);
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

	const getColorForEvent = (eventId) => {
		if (!eventColorMap.current[eventId]) {
			eventColorMap.current[eventId] = getRandomColor();
		}
		return eventColorMap.current[eventId];
	};

	const menuHandler = (schedules) => {
		if (schedules.length === 1) {
			dispatch(
				openScheduleEditModal({
					type: SCHEDULE_TYPE.PERSONAL,
				}),
			);
		} else {
			// 리스트 모달 띄우기
		}
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
				currentWeek={currentWeek}
				handleDateChange={handleDateChange}
				menuHandler={type === SCHEDULE_TYPE.PERSONAL && menuHandler}
			/>
		</CalendarContainerDiv>
	);
};

export default CalendarContainer;
