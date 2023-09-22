import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScheduleAddIcon from "@/assets/icon/ic-schedule-add.svg";
import ScheduleModal from "@/components/Common/ScheduleModal/ScheduleModal.jsx";
import ScheduleItem from "@/components/ScheduleItemList/ScheduleItem/ScheduleItem";
import { UI_TYPE } from "@/constants/uiConstans";
import { getTodaySchedules } from "@/features/schedule/schedule-service.js";
import { openScheduleCreateModal } from "@/features/ui/ui-slice";

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

const ScheduleItemList = () => {
	const dispatch = useDispatch();
	const { openedModal } = useSelector((state) => state.ui);
	const todaySchedules = useSelector((state) => state.schedule.todaySchedules);
	const [selectedTab, setSelectedTab] = useState(false);

	useEffect(() => {
		dispatch(getTodaySchedules());
	}, []);

	const handleMenuOpen = () => {
		dispatch(
			openScheduleCreateModal({
				type: UI_TYPE.PERSONAL_SCHEDULE,
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
					{todaySchedules.length === 0 ? (
						<TodoButton onClick={handleMenuOpen}>
							아직 추가된 일정이 없습니다! <br />할 일을 추가하여 하루동안 할
							일을 관리해보세요.
						</TodoButton>
					) : (
						<TodoList>
							{todaySchedules.map((schedule) => {
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
