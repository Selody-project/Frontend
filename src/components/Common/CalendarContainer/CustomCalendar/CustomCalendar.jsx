import React, { forwardRef } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import { CustomCalendarDiv, TitleSelect } from "./CustomCalendar.styles";

const CustomCalendar = forwardRef(
	(
		{
			fullCalendarEvents,
			currentYear,
			currentMonth,
			handleDateChange,
			menuHandler = null,
		},
		calendarRef,
	) => (
		<CustomCalendarDiv data-testid="calendar-container">
			<TitleSelect
				value={`${currentYear}-${currentMonth}`}
				onChange={(e) => {
					const [year, month] = e.target.value.split("-");
					handleDateChange(year, parseInt(month, 10) - 1);
				}}
			>
				{Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i).map(
					(year) =>
						Array.from({ length: 12 }, (_, j) => j + 1).map((month) => (
							<option key={`${year}-${month}`} value={`${year}-${month}`}>
								{year}년 {month}월
							</option>
						)),
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
			/>
		</CustomCalendarDiv>
	),
);

export default CustomCalendar;
