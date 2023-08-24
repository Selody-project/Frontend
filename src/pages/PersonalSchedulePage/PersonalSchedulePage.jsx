import React from "react";

import scheduleType from "@/constants/calendar/scheduleType";

import { LayoutMain } from "./PersonalSchedulePage.styles";
import CalendarContainer from "../../components/Common/CalendarContainer/CalendarContainer";
import Header from "../../components/Header/Header/Header";
import PersonalTodoList from "../../components/PersonalTodoList/PersonalTodoList/PersonalTodoList";

const PersonalSchedulePage = () => {
	return (
		<>
			<Header />
			<LayoutMain>
				<CalendarContainer type={scheduleType.personal} />
				<PersonalTodoList />
			</LayoutMain>
		</>
	);
};

export default PersonalSchedulePage;
