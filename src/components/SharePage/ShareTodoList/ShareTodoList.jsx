import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ScheduleModal from "@/components/Common/ScheduleModal/ScheduleModal.jsx";
import ScheduleItem from "@/components/ScheduleItemList/ScheduleItem/ScheduleItem.jsx";
import { UI_TYPE } from "@/constants/uiConstants.js";
import { createInviteLink } from "@/features/group/group-invite-service.js";
import { openScheduleCreateModal } from "@/features/ui/ui-slice.js";

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
	Wrapper,
} from "./ShareTodoList.styles.js";

const ShareTodoList = () => {
	const dispatch = useDispatch();
	const { openedModal } = useSelector((state) => state.ui);
	const { todaySchedules } = useSelector((state) => state.schedule);
	const { group } = useSelector((state) => state.group);
	const { inviteCode } = useSelector((state) => state.groupInvite);
	const [selectedTab, setSelectedTab] = useState(true);

	const createInviteCodeHandler = () => {
		dispatch(createInviteLink(group.groupId));
	};

	return (
		<Wrapper>
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
								<AddEventButton
									onClick={() =>
										dispatch(
											openScheduleCreateModal({ type: UI_TYPE.SHARE_SCHEDULE }),
										)
									}
								>
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
								<AddEventButton
									onClick={() =>
										dispatch(
											openScheduleCreateModal({
												type: UI_TYPE.PERSONAL_SCHEDULE,
											}),
										)
									}
								>
									<img src="/todo_add.svg" alt="Add-icon" />
									일정 추가
								</AddEventButton>
							</TodoTitle>
							<TodoSubtitle>하루동안의 할 일을 관리합니다.</TodoSubtitle>
							<TodoList>
								{todaySchedules.map((s) => {
									return (
										<ScheduleItem key={Math.random().toString()} schedule={s} />
									);
								})}
							</TodoList>
						</>
					)}
				</TodoBody>
			</TodoContainer>
			{(openedModal === UI_TYPE.PERSONAL_SCHEDULE ||
				openedModal === UI_TYPE.SHARE_SCHEDULE) && (
				<ScheduleModal
					type={openedModal}
					initFormValues={
						openedModal === UI_TYPE.PERSONAL_SCHEDULE
							? {
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
							  }
							: {
									title: "",
									details: "",
									startDate: "",
									startTime: "",
									endDate: "",
									endTime: "",
									voteEndDate: "",
									voteEndTime: "",
							  }
					}
				/>
			)}
			<div className="invite">
				<h2>초대코드 생성</h2>
				<div className="container">
					<div className="box">{inviteCode || ""}</div>
					<button type="button" onClick={createInviteCodeHandler}>
						생성
					</button>
				</div>
			</div>
		</Wrapper>
	);
};

export default ShareTodoList;
