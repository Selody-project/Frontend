import React from "react";

import CalendarContainer from "@/components/Common/CalendarContainer";
import SCHEDULE_TYPE from "@/constants/calendar/scheduleType";

import { LayoutMain } from "./PersonalSchedulePage.styles";
import PersonalTodoList from "../../components/PersonalTodoList/PersonalTodoList/PersonalTodoList";

const PersonalSchedulePage = () => {
	return (
		<LayoutMain>
			<CalendarContainer type={SCHEDULE_TYPE.personal} />
			<PersonalTodoList />
		</LayoutMain>
	);
};

export default PersonalSchedulePage;
