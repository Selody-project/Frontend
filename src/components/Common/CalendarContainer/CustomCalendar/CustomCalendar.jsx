import React, { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useTheme } from "styled-components";

import { VIEW_TYPE } from "@/constants/calendarConstants";
import { setCurrentCalenderView } from "@/features/schedule/schedule-slice";

import { CustomCalendarDiv, TitleSelect } from "./CustomCalendar.styles";

// 월이 포함한 주차 갯수 계산하기
const countWeek = (year, month) => {
	const firstOfMonth = new Date(year, month - 1, 1);
	const lastOfMonth = new Date(year, month, 0);

	const used = firstOfMonth.getDay() + lastOfMonth.getDate();

	return Math.ceil(used / 7);
};

const getSelectValue = (currentView, currentYear, currentMonth, currentWeek) =>
	currentView === VIEW_TYPE.DAY_GRID_MONTH
		? `${currentYear}-${currentMonth}`
		: `${currentYear}-${currentMonth}-${currentWeek}`;

const getDayHeaderContentInTimeGridWeek = ({ date, text }) => {
	const week = text.slice(text.length - 2, text.length - 1);
	const isItToday = !(date - new Date(new Date().setHours(0, 0, 0, 0)));

	return (
		<div>
			<div>{week}</div>
			<div className={`dateNum ${isItToday && "today"}`}>{date.getDate()}</div>
		</div>
	);
};

const getTimeFormat = ({ date: { hour } }) => {
	return `${hour < 10 ? `0${hour}` : hour}`;
};

const CustomCalendar = forwardRef(
	(
		{
			fullCalendarEvents,
			handleDateChange,
			handleDateClick,
			handleScheduleClick = null,
		},
		calendarRef,
	) => {
		const { currentYear, currentMonth, currentWeek, currentCalendarView } =
			useSelector((state) => state.schedule);
		const dispatch = useDispatch();

		const theme = useTheme();
		useEffect(() => {
			if (currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH) {
				const scheduleEventsDivsForEachDate = document.querySelectorAll(
					".fc-daygrid-day-events",
				);
				scheduleEventsDivsForEachDate.forEach((scheduleEventsDiv) => {
					const childEventsDiv = scheduleEventsDiv.querySelectorAll(
						".fc-daygrid-event-harness",
					);
					if (childEventsDiv.length === 0) return;
					childEventsDiv.forEach((scheduleDiv, index) => {
						const [, continuousClassName] = scheduleDiv.classList;
						if (continuousClassName) {
							// 연속 일정인데 여러 개인 경우 겹치기
							scheduleDiv.style.top = 0;
						} else if (scheduleDiv.style["margin-top"] === "18px") {
							// 하루종일인 이벤트가 함꼐 있는 일자의 맨 위 스케줄의 margin을 더 띄워 줍니다
							scheduleDiv.style["margin-top"] = "20px";
						} else if (scheduleDiv.style["margin-top"] === "0px" && index > 0) {
							// 단일 일정이 여러 개 있는 경우 하나로 겹쳐줍니다.
							scheduleDiv.style["margin-top"] = "-20.1px";
						}
					});
				});
			} else {
				const timeGridEventDivs = document.querySelectorAll(
					".fc-timegrid-col-events",
				);
				Array.from(timeGridEventDivs)
					.filter((eventDiv) => eventDiv.childNodes.length > 0)
					.forEach((eventDiv) => {
						eventDiv.childNodes.forEach((absoluteDiv) => {
							absoluteDiv.style["inset-inline-start"] = 0;
							absoluteDiv.style["inset-inline-end"] = 0;
						});
					});
			}
		});

		return (
			<CustomCalendarDiv
				data-testid="calendar-container"
				isMonthly={currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH}
			>
				<TitleSelect
					isMonthly={currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH}
					value={getSelectValue(
						currentCalendarView,
						currentYear,
						currentMonth,
						currentWeek,
					)}
					onChange={(e) => {
						const [year, month, week] = e.target.value.split("-");
						handleDateChange(year, month, week || null);
					}}
				>
					{Array.from(
						{ length: 3 },
						(_, i) => new Date().getFullYear() + i,
					).map((year) =>
						Array.from({ length: 12 }, (_, j) => j + 1).map((month) =>
							currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH ? (
								<option key={`${year}-${month}`} value={`${year}-${month}`}>
									{year}년 {month}월
								</option>
							) : (
								Array.from(
									{ length: countWeek(year, month) },
									(_, k) => k + 1,
								).map((week) => (
									<option
										key={`${year}-${month}-${week}`}
										value={`${year}-${month}-${week}`}
									>
										{year}년 {month}월 {week}주차
									</option>
								))
							),
						),
					)}
				</TitleSelect>
				<FullCalendar
					ref={calendarRef}
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={fullCalendarEvents}
					headerToolbar={{
						start: "",
						center: "dayGridMonth,timeGridWeek",
						end: "",
					}}
					views={{
						timeGridWeek: {
							dayHeaderContent: getDayHeaderContentInTimeGridWeek,
						},
					}}
					buttonText={{
						month: "월별",
						week: "리스트",
					}}
					selectable={true}
					allDaySlot={false}
					locale="ko"
					dayCellContent={(renderInfo) =>
						renderInfo.dayNumberText.replace("일", "")
					}
					height={currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH ? 654 : 964}
					eventClick={handleScheduleClick}
					dateClick={handleDateClick}
					datesSet={({ view: { type } }) =>
						dispatch(setCurrentCalenderView(type))
					}
					slotLabelFormat={getTimeFormat}
					slotDuration="1:00:00"
					eventBackgroundColor={theme.colors.disabled_text}
					displayEventTime={false}
					eventDisplay="block"
					eventBorderColor="transparent"
				/>
			</CustomCalendarDiv>
		);
	},
);

export default CustomCalendar;
