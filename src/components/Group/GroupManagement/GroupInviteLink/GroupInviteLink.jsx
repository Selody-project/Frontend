import React, { useEffect } from "react";
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

	const { isLoading, inviteLink } = useSelector((state) => state.group);

	const { groupId, name } = groupInfo.information.group;

	const createLinkButtonClick = () => {
		dispatch(createGroupInviteLink(groupId));
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
				<h3>{name}</h3>
				<CloseIcon onClick={() => onClose(false)} />
			</TopDiv>
			<MiddleDiv>
				<TextDiv>{!isLoading ? inviteLink?.inviteCode : "링크"}</TextDiv>
				<button
					type="button"
					onClick={() => handleCopyClipBoard(inviteLink?.inviteCode)}
				>
					복사
				</button>
			</MiddleDiv>
			<h3>* 24시간이 지나거나 새로 생성 시 기존 코드는 만료됩니다.</h3>
		</ContainerDiv>
	);
};

export default GroupInviteLink;
