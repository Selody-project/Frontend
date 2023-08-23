import React from "react";

import styled from "styled-components";

import CalendarContainer from "@/components/Common/CalendarContainer";

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
				<CalendarContainer type="PERSONAL" />
				<PersonalTodoList />
			</MainContainer>
		</>
	);
};

export default PersonalSchedulePage;
