import React from "react";

import styled from "styled-components";

import CalendarContainer from "@/components/Common/CalendarContainer";
import scheduleType from "@/constants/calendar/scheduleType";

import Header from "../components/Header/Header/Header";
import PersonalTodoList from "../components/PersonalTodoList/PersonalTodoList/PersonalTodoList";

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	padding: 50px 60px 0;
	font-family: "Inter", sans-serif;
`;

const PersonalSchedulePage = () => {
	return (
		<>
			<Header />
			<MainContainer>
				<CalendarContainer type={scheduleType.personal} />
				<PersonalTodoList />
			</MainContainer>
		</>
	);
};

export default PersonalSchedulePage;
