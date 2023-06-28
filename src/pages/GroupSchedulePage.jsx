import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header/Header";
import PersonalTodoList from "../components/SharePage/ShareTodoList";
import CalendarContainer from "../components/SharePage/CalendarContainer.jsx";
import { getGroupList } from "@/features/group/group-service.js";

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	padding: 50px 60px 0;
	font-family: "Inter", sans-serif;
`;

const ShareSchedulePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGroupList());
	}, []);

	return (
		<>
			<Header />
			<MainContainer>
				<CalendarContainer />
				<PersonalTodoList />
			</MainContainer>
		</>
	);
};

export default ShareSchedulePage;
