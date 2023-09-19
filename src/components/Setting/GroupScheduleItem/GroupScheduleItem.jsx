import React, { useState } from "react";

import EditIcon from "@/assets/icon/ic-edit.svg";
import ToggleButton from "@/components/Common/ToggleButton/ToggleButton";

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

const GroupScheduleItem = ({ isOwner }) => {
	const [isSharingEnabled, setIsSharingEnabled] = useState(false);
	const [hasNotification, setHasNotification] = useState(false);

	return (
		<ContainerDiv>
			<UpperDiv>
				<GroupNameDiv>
					<span>그룹 A</span>
					{isOwner && (
						<>
							<EditIcon />
							<div>방장</div>
						</>
					)}
				</GroupNameDiv>
				<ButtonWrapDiv>
					{isOwner ? (
						<>
							<DelegateButton>다른 사람에게 위임</DelegateButton>
							<Button>그룹 삭제</Button>
						</>
					) : (
						<Button>나가기</Button>
					)}
				</ButtonWrapDiv>
			</UpperDiv>
			<DividerHr />
			<LowerDiv>
				<ToggleDiv onClick={() => setIsSharingEnabled((prev) => !prev)}>
					<TitleSpan>개인 일정 공유 여부</TitleSpan>
					<ToggleButton isActive={isSharingEnabled} />
				</ToggleDiv>
				<ToggleDiv onClick={() => setHasNotification((prev) => !prev)}>
					<TitleSpan>일정 알림</TitleSpan>
					<ToggleButton isActive={hasNotification} />
				</ToggleDiv>
			</LowerDiv>
		</ContainerDiv>
	);
};

export default GroupScheduleItem;
