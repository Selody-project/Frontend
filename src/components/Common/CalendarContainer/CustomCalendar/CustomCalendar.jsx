import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

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
	return (
		<div>
			<div>{week}</div>
			<div className="dateNum">{date.getDate()}</div>
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
			currentYear,
			currentMonth,
			currentWeek,
			handleDateChange,
			menuHandler = null,
		},
		calendarRef,
	) => {
		const currentCalendarView = useSelector(
			({ schedule }) => schedule.currentCalendarView,
		);
		const dispatch = useDispatch();

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
					height={750}
					eventClick={menuHandler}
					datesSet={({ view: { type } }) =>
						dispatch(setCurrentCalenderView(type))
					}
					slotLabelFormat={getTimeFormat}
					slotDuration="1:00:00"
				/>
			</CustomCalendarDiv>
		);
	},
);

export default CustomCalendar;
