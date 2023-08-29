import React from "react";
import { useSelector } from "react-redux";

import CalendarContainer from "@/components/Common/CalendarContainer/CalendarContainer";
import ScheduleItemList from "@/components/ScheduleItemList/ScheduleItemList";
import { SCHEDULE_TYPE, VIEW_TYPE } from "@/constants/calendarConstants";

import { LayoutMain } from "./PersonalSchedulePage.styles";

const PersonalSchedulePage = () => {
	const currentCalendarView = useSelector(
		({ schedule }) => schedule.currentCalendarView,
	);

	return (
		<LayoutMain isMonthly={currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH}>
			<CalendarContainer type={SCHEDULE_TYPE.PERSONAL} />
			<ScheduleItemList />
		</LayoutMain>
	);
};

export default PersonalSchedulePage;
