import React from "react";

import styled from "styled-components";

import CalendarContainer from "@/components/Common/CalendarContainer/CalendarContainer";
import { SCHEDULE_TYPE } from "@/constants/calendarConstants";

import ShareTodoList from "../components/SharePage/ShareTodoList/ShareTodoList";

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	padding: 50px 60px 0;
	font-family: "Inter", sans-serif;
`;

const GroupSchedulePage = () => {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getGroupList());
	// }, []);

	return (
		<MainContainer>
			<CalendarContainer type={SCHEDULE_TYPE.SHARED} />
			<ShareTodoList />
		</MainContainer>
	);
};

export default GroupSchedulePage;
