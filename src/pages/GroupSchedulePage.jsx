import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header/Header";
import GroupHeader from "../components/Header/GroupHeader";
import ShareTodoList from "../components/SharePage/ShareTodoList";
import CalendarContainer from "../components/SharePage/CalendarContainer.jsx";
import { getGroupList } from "@/features/group/group-service.js";
import CreateGroupModal from "@/components/Group/CreateGroupModal.jsx";

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	padding: 50px 60px 0;
	font-family: "Inter", sans-serif;
`;

const GroupSchedulePage = () => {
	const { isModalOpen } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGroupList());
	}, []);

	return (
		<>
			<Header />
			<GroupHeader />
			<MainContainer>
				<CalendarContainer />
				<ShareTodoList />
			</MainContainer>
			{isModalOpen && <CreateGroupModal />}
		</>
	);
};

export default GroupSchedulePage;
