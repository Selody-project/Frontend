import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SCHEDULE_TYPE } from "@/constants/calendarConstants";
import {
	getCurrentWeek,
	resetCurrentDate,
	setCurrentMonth,
	setCurrentWeek,
	setCurrentYear,
} from "@/features/schedule/schedule-slice";
import { openModal } from "@/features/ui/ui-slice";
import { setEdit } from "@/features/user/user-slice";
// import { getRandomColor } from "@/utils/color";

import { CalendarContainerDiv } from "./CalendarContainer.styles";
import CustomCalendar from "./CustomCalendar/CustomCalendar";
import InviteUser from "../../SharePage/InviteUser";

const DUMMY_SCHEDUELS = [
	// {
	// 	groupId: "work",
	// 	title: "운동하기",
	// 	start: "18:00:00",
	// 	end: "20:00:00",
	// 	daysOfWeek: [1, 3, 5], // 월, 수, 금에 반복
	// 	startRecur: new Date(2023, 7, 30),
	// 	endRecur: new Date(2023, 8, 30), // 1달 뒤까지 반복
	// },
	{
		id: 0,
		title: "저녁 맛있는 거 먹기",
		start: new Date(2023, 7, 31, 18),
		end: new Date(2023, 7, 31, 19),
	},
	{
		id: 4,
		title: "간식 뭐 먹을지 생각하기",
		start: new Date(2023, 7, 31, 18),
		end: new Date(2023, 7, 31, 19, 30),
	},
	{
		id: 1,
		title: "출퇴근 걸어가기",
		start: new Date(2023, 7),
		end: new Date(2023, 8, 1),
	},
	{
		id: 5,
		title: "절약하기",
		start: new Date(2023, 7, 10),
		end: new Date(2023, 7, 31),
	},
	{
		id: 2,
		title: "출근 걸어가기",
		start: new Date(2023, 8, 4, 8, 30),
		end: new Date(2023, 8, 4, 9),
	},
	{
		id: 3,
		title: "퇴근 걸어가기",
		start: new Date(2023, 8, 4, 18, 0),
		end: new Date(2023, 8, 4, 18, 30),
	},
];

const generateSchedulesWithoutTitle = (schedules) =>
	schedules.map((scheduleObj) => ({ ...scheduleObj, title: "" }));

// 리스트(주마다 보기)로 진행했을 떄 보여줄 첫 일요일을 계산합니다.
export const getFirstDateOfWeek = (year, month, week) => {
	const firstDateOfMonth = new Date(year, month - 1);
	const firstDayOfMonth = firstDateOfMonth.getDay();
	firstDateOfMonth.setDate(
		firstDateOfMonth.getDate() - firstDayOfMonth + 7 * (week - 1),
	);
	return firstDateOfMonth.getDate();
};

const CalendarContainer = ({ type }) => {
	const currentWeekStart = new Date();

	const dispatch = useDispatch();

	const calendarRef = useRef(null);
	// const eventColorMap = useRef({});

	const { currentYear, currentMonth, currentWeek } = useSelector(
		(state) => state.schedule,
	);

	const [selectedGroup, setSelectedGroup] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
	const [inviteInput, setInviteInput] = useState("");
	const [invitationLink, setInvitationLink] = useState("");

	// const fullCalendarEvents = events.map((event) => ({
	// 	title: event.text,
	// 	start: event.start.toISOString().replace(".000Z", ""),
	// 	end: event.end.toISOString().replace(".000Z", ""),
	// 	color:
	// 		event.colors !== ""
	// 			? event.colors
	// 			: CALENDAR_COLORS[events.indexOf(event) % CALENDAR_COLORS.length],
	// }));

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

	// const getColorForEvent = (eventId) => {
	// 	if (!eventColorMap.current[eventId]) {
	// 		eventColorMap.current[eventId] = getRandomColor();
	// 	}
	// 	return eventColorMap.current[eventId];
	// };

	const handleDateClick = (info) => {
		const startDate = info.date;
		const endDate = new Date(
			startDate.getFullYear(),
			startDate.getMonth(),
			startDate.getDate() + 1,
		);
		const schdeulesThisDateContained = DUMMY_SCHEDUELS.filter((schedule) => {
			return (
				// 아예 양쪽으로 포암하거나(오버랩)
				(schedule.start <= startDate && schedule.end >= endDate) ||
				// 시작이 포함되거나
				(schedule.start >= startDate && schedule.start <= endDate) ||
				// 끝이 포함되거나
				(schedule.end >= startDate && schedule.end <= endDate) ||
				// 그냥 안에 있거나
				(schedule.start >= startDate && schedule.end <= endDate)
			);
		});
		console.log(schdeulesThisDateContained);
	};

	const handleScheduleClick = (clickedInfo) => {
		const { start, end } = clickedInfo.event; // 클릭한 이벤트
		// 오버랩된 이벤트
		const overlappedSchedules = DUMMY_SCHEDUELS.filter((schedule) => {
			return (
				schedule.start <= start && // 시작한 날짜가 클릭 이벤트의 시작 날짜 이후
				schedule.end >= end // 시작 날짜가 클릭 이벤트의 끝나는 날짜 이전
			);
		});
		console.log(overlappedSchedules);
		dispatch(setEdit(true));
		dispatch(openModal({ type: SCHEDULE_TYPE.PERSONAL }));
		// console.log(schedule[0].id);
		// dispatch(setId(schedule.id));
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
		return () => {
			dispatch(resetCurrentDate());
		};
	}, []);

	useEffect(() => {
		currentWeekStart.setDate(
			currentWeekStart.getDate() - currentWeekStart.getDay(),
		);
	}, [currentWeekStart]);

	// useEffect(() => {
	// 	const scheduleEvents = schedule.map((event) => {
	// 		const startDate = new Date(event.startDateTime);
	// 		const endDate = new Date(event.endDateTime);

	// 		return {
	// 			start: startDate,
	// 			end: endDate,
	// 			text: event.title,
	// 			colors: getColorForEvent(event.id),
	// 		};
	// 	});

	// 	const recSchedule = recSchedules
	// 		.map((rec) => {
	// 			const color = getColorForEvent(rec.id);

	// 			return rec.recurrenceDateList.map((event) => {
	// 				const startDate = new Date(event.startDateTime);
	// 				const endDate = new Date(event.endDateTime);

	// 				return {
	// 					start: startDate,
	// 					end: endDate,
	// 					text: rec.title,
	// 					colors: color,
	// 				};
	// 			});
	// 		})
	// 		.flat();

	// 	setEvents([...scheduleEvents, ...recSchedule]);
	// }, [schedule, recSchedules]);
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
				fullCalendarEvents={generateSchedulesWithoutTitle(DUMMY_SCHEDUELS)}
				currentYear={currentYear}
				currentMonth={currentMonth}
				currentWeek={currentWeek}
				handleDateChange={handleDateChange}
				handleDateClick={handleDateClick}
				handleScheduleClick={
					type === SCHEDULE_TYPE.PERSONAL && handleScheduleClick
				}
			/>
		</CalendarContainerDiv>
	);
};

export default CalendarContainer;
