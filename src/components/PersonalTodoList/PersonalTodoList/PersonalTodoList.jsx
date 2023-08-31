import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScheduleModal from "@/components/Common/ScheduleModal/ScheduleModal.jsx";
import { getSchedule } from "@/features/schedule/schedule-service.js";
import { openModal } from "@/features/ui/ui-slice";
import { setEdit } from "@/features/user/user-slice.js";

import {
	TodoContainer,
	TodoHeader,
	TodoTabs,
	TodoTab,
	AddEventButton,
	TodoBody,
	TodoTitle,
	TodoSubtitle,
	TodoButton,
	TodoList,
} from "./PersonalTodoList.styles";
import PersonalTodoItem from "../PersonalTodoItem/PersonalTodoItem";

const PersonalTodoList = () => {
	const dispatch = useDispatch();
	const { openedModal } = useSelector((state) => state.ui);
	const { currentYear, currentMonth, totalSchedule } = useSelector(
		(state) => state.schedule,
	);
	const [selectedTab, setSelectedTab] = useState(false);

	useEffect(() => {
		dispatch(getSchedule());
	}, [currentYear, currentMonth]);

	const handleMenuOpen = () => {
		dispatch(setEdit(false));
		dispatch(openModal({ type: "PERSONAL_SCHEDULE" }));
	};

	return (
		<>
			<TodoContainer data-testid="personal-todo-list">
				<TodoHeader>
					<TodoTabs>
						<TodoTab
							selected={selectedTab === false}
							onClick={() => setSelectedTab(false)}
						>
							오늘 할 일
						</TodoTab>
						<TodoTab
							selected={selectedTab === true}
							onClick={() => setSelectedTab(true)}
						>
							예정
						</TodoTab>
					</TodoTabs>
				</TodoHeader>
				<TodoBody>
					<TodoTitle>
						오늘의 할 일
						<AddEventButton onClick={handleMenuOpen}>
							<img src="/todo_add.svg" alt="Add-icon" />
							일정 추가
						</AddEventButton>
					</TodoTitle>
					<TodoSubtitle>하루동안의 할 일을 관리합니다.</TodoSubtitle>
					{totalSchedule.length === 0 ? (
						<TodoButton onClick={handleMenuOpen}>
							아직 추가된 일정이 없습니다! <br />할 일을 추가하여 하루동안 할
							일을 관리해보세요.
						</TodoButton>
					) : (
						<TodoList>
							{totalSchedule.map((s) => {
								return (
									<PersonalTodoItem
										key={Math.random().toString()}
										schedule={s}
									/>
								);
							})}
						</TodoList>
					)}
				</TodoBody>
			</TodoContainer>
			{openedModal === "PERSONAL_SCHEDULE" && (
				<ScheduleModal
					type={openedModal}
					initFormValues={{
						title: "",
						details: "",
						startDate: "",
						startTime: "",
						endDate: "",
						endTime: "",
						untilDate: "",
						untilTime: "",
						repeat: "none",
						notification: "none",
					}}
				/>
			)}
		</>
	);
};

export default PersonalTodoList;
