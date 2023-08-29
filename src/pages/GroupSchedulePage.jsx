import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import CreateGroupModal from "@/components/SharePage/CreateGroupModal.jsx";
import { SCHEDULE_TYPE } from "@/constants/calendarConstants";
import { getGroupList } from "@/features/group/group-service.js";

import CalendarContainer from "../components/Common/CalendarContainer/CalendarContainer";
import GroupHeader from "../components/Header/GroupHeader/GroupHeader";
import Header from "../components/Header/Header/Header";
import ShareTodoList from "../components/SharePage/ShareTodoList/ShareTodoList";

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	padding: 50px 60px 0;
	font-family: "Inter", sans-serif;
`;

const GroupSchedulePage = () => {
	const { openedModal } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGroupList());
	}, []);

	return (
		<>
			<Header />
			<GroupHeader />
			<MainContainer>
				<CalendarContainer type={SCHEDULE_TYPE.SHARED} />
				<ShareTodoList />
			</MainContainer>
			{openedModal === "SHARE_PAGE_CREATE" && <CreateGroupModal />}
		</>
	);
};

export default GroupSchedulePage;
