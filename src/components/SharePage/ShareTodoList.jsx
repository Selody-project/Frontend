import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMenuToggle, setEdit } from "../../features/user/user-slice.js";
import PersonalModal from "../PersonalTodoList/Modal/Modal.jsx";
import ShareModal from "./Modal/Modal.jsx";
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
import PersonalTodoItem from "../PersonalTodoList/PersonalTodoItem.jsx";
import { getSchedule } from "@/features/schedule/schedule-service.js";
import { createInviteLink } from "@/features/group/group-invite-service.js";

const ShareTodoList = () => {
	const [selectedTab, setSelectedTab] = useState(true);
	const [personalModal, setPersonalModal] = useState(false);
	const [shareModal, setShareModal] = useState(false);
	const { month, year, totalSchedule } = useSelector((state) => state.schedule);
	const { group } = useSelector((state) => state.group);
	const { inviteCode } = useSelector((state) => state.groupInvite);
	const dispatch = useDispatch();

	const handlePersonalModalOpen = () => {
		dispatch(setEdit(false));
		dispatch(handleMenuToggle());
		setPersonalModal(true);
	};

	const handleShareModalOpen = () => {
		dispatch(setEdit(false));
		dispatch(handleMenuToggle());
		setShareModal(true);
	};

	const createInviteCodeHandler = () => {
		dispatch(createInviteLink(group.groupId));
	};

	useEffect(() => {
		dispatch(getSchedule());
	}, [month, year]);

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
								<AddEventButton onClick={handleShareModalOpen}>
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
								<AddEventButton onClick={handlePersonalModalOpen}>
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
			{personalModal && (
				<PersonalModal
					personalModal={personalModal}
					setPersonalModal={setPersonalModal}
				/>
			)}
			{shareModal && (
				<ShareModal shareModal={shareModal} setShareModal={setShareModal} />
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
