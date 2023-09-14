import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScheduleAddIcon from "@/assets/icon/ic-schedule-add.svg";
import ScheduleModal from "@/components/Common/ScheduleModal/ScheduleModal.jsx";
import { setEdit } from "@/features/auth/auth-slice.js";
import { getSchedule } from "@/features/schedule/schedule-service.js";
import { openModal } from "@/features/ui/ui-slice";

import {
	TodoHeader,
	TodoTab,
	ScheduleAddButton,
	TodoBody,
	TodoButton,
	TodoList,
	PersonalTodoListLayoutAside,
	TodoH2,
	TodoH3,
	TodoBodyHeader,
} from "./PersonalTodoList.styles";
import PersonalTodoItem from "../PersonalTodoItem/PersonalTodoItem";

const PersonalTodoList = () => {
	const dispatch = useDispatch();
	const { openedModal } = useSelector((state) => state.ui);
	const { month, year, totalSchedule } = useSelector((state) => state.schedule);
	const [selectedTab, setSelectedTab] = useState(false);

	useEffect(() => {
		dispatch(getSchedule());
	}, [month, year]);

	const handleMenuOpen = () => {
		dispatch(setEdit(false));
		dispatch(openModal({ type: "PERSONAL_SCHEDULE" }));
	};

	return (
		<>
			<PersonalTodoListLayoutAside data-testid="personal-todo-list">
				<TodoHeader>
					<TodoTab
						selected={selectedTab === false}
						onClick={() => setSelectedTab(false)}
					>
						오늘 일정
					</TodoTab>
					<TodoTab
						selected={selectedTab === true}
						onClick={() => setSelectedTab(true)}
					>
						예정
					</TodoTab>
				</TodoHeader>
				<TodoBody>
					<TodoBodyHeader>
						<div>
							<TodoH2>오늘 일정</TodoH2>
							<TodoH3>하루동안의 할 일을 관리합니다.</TodoH3>
						</div>
						<ScheduleAddButton onClick={handleMenuOpen}>
							<ScheduleAddIcon />
							<span>일정 추가</span>
						</ScheduleAddButton>
					</TodoBodyHeader>
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
			</PersonalTodoListLayoutAside>
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
