import React from "react";

import CalendarContainer from "@/components/Common/CalendarContainer/CalendarContainer";
import { SCHEDULE_TYPE } from "@/constants/calendarConstants";

import { LayoutMain } from "./PersonalSchedulePage.styles";
import PersonalTodoList from "../../components/ScheduleItemList/ScheduleItemList";

const PersonalSchedulePage = () => {
	return (
		<LayoutMain>
			<CalendarContainer type={SCHEDULE_TYPE.PERSONAL} />
			<PersonalTodoList />
		</LayoutMain>
	);
};

export default PersonalSchedulePage;
