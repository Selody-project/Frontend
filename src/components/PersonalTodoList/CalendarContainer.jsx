import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Wrapper } from "./CalendarContainer.styles";

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

	useEffect(() => {
		currentWeekStart.setDate(
			currentWeekStart.getDate() - currentWeekStart.getDay(),
		);
	}, [currentWeekStart]);

	useEffect(() => {
		const scheduleEvents = schedule.map((event) => {
			const startDate = new Date(`${event.startDate}T${event.startTime}`);
			const endDate = new Date(`${event.endDate}T${event.endTime}`);
			console.log(startDate, endDate);

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
		start: event.start.toISOString(),
		end: event.end.toISOString(),
		color: colors[events.indexOf(event) % colors.length],
	}));

	return (
		<Wrapper data-testid="calendar-container">
			<div className="calendar">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={fullCalendarEvents}
					headerToolbar={{
						left: "prev,next today",
						center: "title",
						right: "dayGridMonth,timeGridWeek,timeGridDay",
					}}
					selectable={true}
					weekends={true}
					allDaySlot={false}
					eventClick={(info) => {
						console.log(info);
					}}
				/>
			</div>
		</Wrapper>
	);
};

export default CalendarContainer;
