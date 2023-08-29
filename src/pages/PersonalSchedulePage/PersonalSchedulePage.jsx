import React from "react";

import { SCHEDULE_TYPE } from "@/constants/calendarConstants";

import { LayoutMain } from "./PersonalSchedulePage.styles";
import CalendarContainer from "../../components/Common/CalendarContainer/CalendarContainer";
import Header from "../../components/Header/Header/Header";
import PersonalTodoList from "../../components/PersonalTodoList/PersonalTodoList/PersonalTodoList";

const PersonalSchedulePage = () => {
	return (
		<>
			<Header />
			<LayoutMain>
				<CalendarContainer type={SCHEDULE_TYPE.PERSONAL} />
				<PersonalTodoList />
			</LayoutMain>
		</>
	);
};

export default PersonalSchedulePage;
