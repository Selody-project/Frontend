import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Wrapper } from "./CalendarContainer.styles";
import {
	currentMonthFn,
	currentYearFn,
} from "@/features/schedule/schedule-slice";
import { getRandomColor } from "@/utils/color";

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
	const { groupList } = useSelector((state) => state.group.groupList);
	const { schedule, recSchedules } = useSelector((state) => state.schedule);
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

	const handleDateChange = (year, month) => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.gotoDate(new Date(year, month));
		updateCurrentMonth();
	};

	const eventColorMap = useRef({});

	const getColorForEvent = (eventId) => {
		if (!eventColorMap.current[eventId]) {
			eventColorMap.current[eventId] = getRandomColor();
		}
		return eventColorMap.current[eventId];
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

	const fullCalendarEvents = events.map((event) => ({
		title: event.text,
		start: event.start.toISOString().replace(".000Z", ""),
		end: event.end.toISOString().replace(".000Z", ""),
		color:
			event.colors !== ""
				? event.colors
				: colors[events.indexOf(event) % colors.length],
	}));

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "end",
				marginRight: "2rem",
				width: "100%",
			}}
		>
			<div style={{ marginBottom: "2rem" }}>
				<Autocomplete
					id="combo-box-demo"
					options={groupList}
					getOptionLabel={(option) => option.name}
					style={{ width: 150 }}
					renderInput={(params) => (
						<TextField {...params} label="Select a group" />
					)}
				/>
			</div>
			<Wrapper data-testid="calendar-container">
				<div className="calendar">
					<div className="date-selector">
						<select
							className="date-dropdown"
							value={`${currentYear}-${currentMonth}`}
							onChange={(e) => {
								const [year, month] = e.target.value.split("-");
								handleDateChange(year, parseInt(month, 10) - 1);
							}}
						>
							{Array.from(
								{ length: 5 },
								(_, i) => new Date().getFullYear() + i,
							).map((year) =>
								Array.from({ length: 12 }, (_, j) => j + 1).map((month) => (
									<option key={`${year}-${month}`} value={`${year}-${month}`}>
										{year}년 {month}월
									</option>
								)),
							)}
						</select>
					</div>
					<FullCalendar
						ref={calendarRef}
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
						initialView="dayGridMonth"
						events={fullCalendarEvents}
						headerToolbar={{
							left: "",
							center: "title",
							right: "dayGridMonth,timeGridWeek",
						}}
						selectable={true}
						weekends={true}
						allDaySlot={false}
						locale="ko"
						dayCellContent={(renderInfo) =>
							renderInfo.dayNumberText.replace("일", "")
						}
						height={750}
						eventClick={(info) => {
							console.log(info);
						}}
					/>
				</div>
			</Wrapper>
		</div>
	);
};

export default CalendarContainer;
