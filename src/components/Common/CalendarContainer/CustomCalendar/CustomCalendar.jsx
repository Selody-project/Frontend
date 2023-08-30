import React, { forwardRef, useState } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import { CustomCalendarDiv, TitleSelect } from "./CustomCalendar.styles";

const VIEW_TYPE = {
	DAY_GRID_WEEK: "dayGridWeek",
	DAY_GRID_MONTH: "dayGridMonth",
};

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

const CustomCalendar = forwardRef(
	(
		{
			fullCalendarEvents,
			currentYear,
			currentMonth,
			currentWeek,
			handleDateChange,
			menuHandler = null,
		},
		calendarRef,
	) => {
		const [currentView, setCurrentView] = useState(VIEW_TYPE.DAY_GRID_MONTH);
		const currentDate = new Date();
		const selectStartDate = new Date(
			currentDate.setMonth(currentDate.getMonth() - 3),
		);
		return (
			<CustomCalendarDiv data-testid="calendar-container">
				<TitleSelect
					value={getSelectValue(
						currentView,
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
						{
							length:
								selectStartDate.getMonth() > currentDate.getMonth() ? 4 : 3,
						},
						(_, i) => selectStartDate.getFullYear() + i,
					).map((year) =>
						Array.from(
							{
								length:
									year === selectStartDate.getFullYear()
										? 12 - selectStartDate.getMonth()
										: 12,
							},
							(_, j) =>
								year === selectStartDate.getFullYear()
									? selectStartDate.getMonth() + 1 + j
									: j + 1,
						).map((month) =>
							currentView === VIEW_TYPE.DAY_GRID_MONTH ? (
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
						center: "dayGridMonth,dayGridWeek",
						end: "",
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
					height={750}
					eventClick={menuHandler}
					datesSet={({ view: { type } }) => setCurrentView(type)}
				/>
			</CustomCalendarDiv>
		);
	},
);

export default CustomCalendar;
