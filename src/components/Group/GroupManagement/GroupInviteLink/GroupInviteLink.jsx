import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@/constants/iconConstants";
import { createGroupInviteLink } from "@/features/group/group-service";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	TextDiv,
} from "./GroupInviteLink.styles";

const GroupInviteLink = ({ groupInfo, onClose }) => {
	const dispatch = useDispatch();

	const groupInviteLink = useSelector(
		(state) => state.group.groupInviteLink?.inviteCode,
	);

	const [inviteLink, setInviteLink] = useState(false);

	const groupId = groupInfo?.groupId;
	const groupName = groupInfo?.name;

	const createLinkButtonClick = () => {
		dispatch(createGroupInviteLink(groupId));
		setInviteLink(true);
	};

	const handleCopyClipBoard = async (text) => {
		await navigator.clipboard.writeText(text);
	};

	useEffect(() => {
		createLinkButtonClick();
	}, []);

	return (
		<ContainerDiv>
			<TopDiv>
				<h3>{groupName}</h3>
				<CloseIcon onClick={() => onClose(false)} />
			</TopDiv>
			<MiddleDiv>
				<TextDiv>{inviteLink ? groupInviteLink : "링크"}</TextDiv>
				<button
					type="button"
					onClick={() => handleCopyClipBoard(groupInviteLink)}
				>
					복사
				</button>
			</MiddleDiv>
			<h3>* 24시간이 지나거나 새로 생성 시 기존 코드는 만료됩니다.</h3>
		</ContainerDiv>
	);
};

export default GroupInviteLink;
