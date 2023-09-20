import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScheduleAddIcon from "@/assets/icon/ic-schedule-add.svg";
import ScheduleModal from "@/components/Common/ScheduleModal/ScheduleModal.jsx";
import ScheduleItem from "@/components/ScheduleItemList/ScheduleItem/ScheduleItem";
import { SCHEDULE_MODAL_TYPE, UI_TYPE } from "@/constants/uiConstans";
import { getSchedule } from "@/features/schedule/schedule-service.js";
import { openModal } from "@/features/ui/ui-slice";

import {
	TodoHeader,
	TodoTab,
	ScheduleAddButton,
	TodoBody,
	TodoButton,
	TodoList,
	TodoH2,
	TodoH3,
	TodoBodyHeader,
	ScheduleItemListLayoutAside,
} from "./ScheduleItemList.styles";

const DUMMY_PERSONAL_SCHEDULES = [
	{
		id: 0,
		title: "오늘 할일 1",
		description: "첫 번째로 할 일은 뭘까",
		start: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			8,
			30,
		),
		end: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			9,
			0,
		),
		recurrence: 0,
	},
	{
		id: 1,
		title: "오늘 할일 2",
		description: "두 번째로 할 일은 뭘까",
		start: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			9,
			0,
		),
		end: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			9,
			30,
		),
		recurrence: 0,
	},
	{
		id: 2,
		title: "오늘 할일 3",
		description: "세 번째로 할 일은 뭘까",
		start: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			11,
			30,
		),
		end: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			12,
			0,
		),
		recurrence: 0,
	},
	{
		id: 3,
		title: "오늘 할일 4",
		description: "네 번째로 할 일은 뭘까",
		start: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			12,
			30,
		),
		end: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			13,
			0,
		),
		recurrence: 0,
	},
	{
		id: 4,
		title: "오늘 할일 5",
		description: "다섯 번째로 할 일은 뭘까",
		start: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			12,
			45,
		),
		end: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			14,
			0,
		),
		recurrence: 0,
	},
	{
		id: 5,
		title: "오늘 할일 6",
		description: "여섯 번째로 할 일은 뭘까",
		start: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			16,
			30,
		),
		end: new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			18,
			0,
		),
		recurrence: 0,
	},
];

const ScheduleItemList = () => {
	const dispatch = useDispatch();
	const { openedModal } = useSelector((state) => state.ui);
	const { month, year } = useSelector((state) => state.schedule);
	const [selectedTab, setSelectedTab] = useState(false);

	useEffect(() => {
		dispatch(getSchedule());
	}, [month, year]);

	const handleMenuOpen = () => {
		dispatch(
			openModal({
				type: UI_TYPE.PERSONAL_SCHEDULE,
				scheduleModalMode: SCHEDULE_MODAL_TYPE.CREATE,
			}),
		);
	};

	return (
		<>
			<ScheduleItemListLayoutAside data-testid="personal-todo-list">
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
					{DUMMY_PERSONAL_SCHEDULES.length === 0 ? (
						<TodoButton onClick={handleMenuOpen}>
							아직 추가된 일정이 없습니다! <br />할 일을 추가하여 하루동안 할
							일을 관리해보세요.
						</TodoButton>
					) : (
						<TodoList>
							{DUMMY_PERSONAL_SCHEDULES.map((schedule) => {
								return (
									<ScheduleItem
										key={schedule.id}
										schedule={schedule}
										isGroup={false}
									/>
								);
							})}
						</TodoList>
					)}
				</TodoBody>
			</ScheduleItemListLayoutAside>
			{openedModal === UI_TYPE.PERSONAL_SCHEDULE && (
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
						repeat: "NONE",
						notification: "NO",
					}}
				/>
			)}
		</>
	);
};

export default ScheduleItemList;
