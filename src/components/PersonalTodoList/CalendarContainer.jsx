import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Wrapper } from "./CalendarContainer.styles";
import { useDispatch } from "react-redux";
import {
	currentMonthFn,
	currentYearFn,
} from "@/features/schedule/schedule-slice";

const CalendarContainer = () => {
	const colors = [
		"#f44336",
		"#e91e63",
		"#9c27b0",
		"#673ab7",
		"#3f51b5",
		"#2196f3",
		"#03a9f4",
		"#00bcd4",
		"#009688",
		"#4caf50",
		"#8bc34a",
		"#cddc39",
		"#ffeb3b",
		"#ffc107",
		"#ff9800",
		"#ff5722",
		"#795548",
		"#607d8b",
		"#022f40",
		"#6b0504",
	];
	const schedule = useSelector((state) => state.schedule.schedule);
	const [events, setEvents] = useState([]);
	const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	const calendarRef = useRef(null);
	const dispatch = useDispatch();

	const updateCurrentMonth = () => {
		const calendarApi = calendarRef.current.getApi();
		const calendarDate = calendarApi.getDate();
		setCurrentMonth(calendarDate.getMonth() + 1);
		setCurrentYear(calendarDate.getFullYear());
	};

	const handleNextMonth = () => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.next();
		updateCurrentMonth();
	};

	const handlePrevMonth = () => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.prev();
		updateCurrentMonth();
	};

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
			};
		});
		setEvents(scheduleEvents);
	}, [schedule]);

	const fullCalendarEvents = events.map((event) => ({
		title: event.text,
		start: event.start.toISOString().replace(".000Z", ""),
		end: event.end.toISOString().replace(".000Z", ""),
		color: colors[events.indexOf(event) % colors.length],
	}));

	return (
		<Wrapper data-testid="calendar-container">
			<div className="calendar">
				<FullCalendar
					ref={calendarRef}
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={fullCalendarEvents}
					customButtons={{
						customNext: {
							text: "Next",
							click: handleNextMonth,
						},
						customPrev: {
							text: "Prev",
							click: handlePrevMonth,
						},
					}}
					headerToolbar={{
						left: "customPrev,customNext today",
						center: "title",
						right: "dayGridMonth,timeGridWeek,timeGridDay",
					}}
					selectable={true}
					weekends={true}
					allDaySlot={false}
					locale="ko"
					eventClick={(info) => {
						console.log(info);
					}}
				/>
			</div>
		</Wrapper>
	);
};

export default CalendarContainer;
