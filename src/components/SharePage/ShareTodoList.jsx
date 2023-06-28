import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMenuToggle, setEdit } from "../../features/user/user-slice.js";
import ModalWindow from "./Modal/Modal.jsx";
import {
	TodoContainer,
	TodoHeader,
	TodoTabs,
	TodoTab,
	AddEventButton,
	TodoBody,
	TodoTitle,
	TodoSubtitle,
	TodoList,
} from "./ShareTodoList.styles.js";
import PersonalTodoItem from "../PersonalTodoList/PersonalTodoItem.jsx";
import { getSchedule } from "@/features/schedule/schedule-service.js";

const PersonalTodoList = () => {
	const [selectedTab, setSelectedTab] = useState(true);
	const { menuOpen } = useSelector((state) => state.user);
	const { month, year, totalSchedule } = useSelector((state) => state.schedule);
	const dispatch = useDispatch();

	const handleMenuOpen = () => {
		dispatch(setEdit(false));
		dispatch(handleMenuToggle());
	};

	useEffect(() => {
		dispatch(getSchedule());
	}, [month, year]);

	return (
		<>
			<TodoContainer data-testid="personal-todo-list">
				<TodoHeader>
					<TodoTabs>
						<TodoTab
							selected={selectedTab === true}
							onClick={() => setSelectedTab(true)}
						>
							일정 후보
						</TodoTab>
						<TodoTab
							selected={selectedTab === false}
							onClick={() => setSelectedTab(false)}
						>
							오늘 할 일
						</TodoTab>
						{/* ... */}
					</TodoTabs>
				</TodoHeader>
				<TodoBody>
					{selectedTab ? (
						<>
							<TodoTitle>
								일정 후보{" "}
								<AddEventButton onClick={handleMenuOpen}>
									<img src="/todo_add.svg" alt="Add-icon" />
									일정 후보 추가
								</AddEventButton>
							</TodoTitle>
							<TodoSubtitle>
								이번 달 일정을 등록하여 사람들에게 미리 알려주세요!
							</TodoSubtitle>
							<TodoList />
						</>
					) : (
						<>
							<TodoTitle>
								오늘의 할 일
								<AddEventButton onClick={handleMenuOpen}>
									<img src="/todo_add.svg" alt="Add-icon" />
									일정 추가
								</AddEventButton>
							</TodoTitle>
							<TodoSubtitle>하루동안의 할 일을 관리합니다.</TodoSubtitle>
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
						</>
					)}
				</TodoBody>
			</TodoContainer>
			{menuOpen && <ModalWindow />}
		</>
	);
};

export default PersonalTodoList;
