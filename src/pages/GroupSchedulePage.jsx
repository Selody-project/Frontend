import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { getGroupList } from "@/features/group/group-service.js";

import CalendarContainer from "../components/Common/CalendarContainer.jsx";
import Header from "../components/Header/Header/Header";
import ShareTodoList from "../components/SharePage/ShareTodoList/ShareTodoList";

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	padding: 50px 60px 0;
	font-family: "Inter", sans-serif;
`;

const GroupSchedulePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGroupList());
	}, []);

	return (
		<>
			<Header />
			<MainContainer>
				<CalendarContainer type="SHARE" />
				<ShareTodoList />
			</MainContainer>
		</>
	);
};

export default GroupSchedulePage;
