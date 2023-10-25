import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ToggleButton from "@/components/Common/ToggleButton/ToggleButton";
import { changeGroupOption } from "@/features/group/group-service";
import {
	selectGroupInfo,
	setRefetchUserGroup,
} from "@/features/group/group-slice";
import { openModal } from "@/features/ui/ui-slice";

import {
	Button,
	ButtonWrapDiv,
	ContainerDiv,
	DelegateButton,
	DividerHr,
	GroupNameDiv,
	LowerDiv,
	TitleSpan,
	ToggleDiv,
	UpperDiv,
} from "./GroupScheduleItem.style";

const GroupScheduleItem = ({
	data: { groupId, name, shareScheduleOption, notificationOption, accessLevel },
}) => {
	const isOwner = accessLevel === "owner";

	const dispatch = useDispatch();

	const [isSharingEnabled, setIsSharingEnabled] = useState(shareScheduleOption);
	const [hasNotification, setHasNotification] = useState(notificationOption);

	const handleModal = (type) => {
		dispatch(openModal({ type }));
		dispatch(selectGroupInfo({ groupId, name }));
	};

	const handleClickToggle = async (type) => {
		const targetOption =
			type === "shareScheduleOption" ? shareScheduleOption : notificationOption;
		const status = targetOption === 1 ? 0 : 1;

		const res = await dispatch(changeGroupOption({ groupId, type, status }));

		if (res.payload === 200) {
			dispatch(setRefetchUserGroup(true));
			if (type === "shareScheduleOption") {
				setIsSharingEnabled((prev) => !prev);
			} else {
				setHasNotification((prev) => !prev);
			}
		}
	};

	return (
		<ContainerDiv>
			<UpperDiv>
				<GroupNameDiv>
					<span>{name}</span>
					{isOwner && <div>방장</div>}
				</GroupNameDiv>
				<ButtonWrapDiv>
					{isOwner ? (
						<>
							<DelegateButton onClick={() => handleModal("DELEGATE_GROUP")}>
								다른 사람에게 위임
							</DelegateButton>
							<Button onClick={() => handleModal("DELETE_GROUP")}>
								그룹 삭제
							</Button>
						</>
					) : (
						<Button onClick={() => handleModal("LEAVE_GROUP")}>나가기</Button>
					)}
				</ButtonWrapDiv>
			</UpperDiv>
			<DividerHr />
			<LowerDiv>
				<ToggleDiv
					onClick={() => {
						handleClickToggle("shareScheduleOption");
					}}
				>
					<TitleSpan>개인 일정 공유 여부</TitleSpan>
					<ToggleButton isActive={isSharingEnabled} />
				</ToggleDiv>
				<ToggleDiv
					isOwner={isOwner}
					onClick={() => {
						if (!isOwner) {
							handleClickToggle("notificationOption");
						}
					}}
				>
					<TitleSpan>알림</TitleSpan>
					<ToggleButton isActive={hasNotification} />
				</ToggleDiv>
			</LowerDiv>
		</ContainerDiv>
	);
};

export default GroupScheduleItem;
