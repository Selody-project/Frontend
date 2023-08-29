import React from "react";
import { useSelector } from "react-redux";

import { SCHEDULE_TYPE, VIEW_TYPE } from "@/constants/calendarConstants";

import { LayoutMain } from "./PersonalSchedulePage.styles";
import CalendarContainer from "../../components/Common/CalendarContainer/CalendarContainer";
import Header from "../../components/Header/Header/Header";
import PersonalTodoList from "../../components/PersonalTodoList/PersonalTodoList/PersonalTodoList";

const PersonalSchedulePage = () => {
	const currentCalendarView = useSelector(
		({ schedule }) => schedule.currentCalendarView,
	);

	return (
		<>
			<Header />
			<LayoutMain isMonthly={currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH}>
				<CalendarContainer type={SCHEDULE_TYPE.PERSONAL} />
				<PersonalTodoList />
			</LayoutMain>
		</>
	);
};

export default PersonalSchedulePage;
