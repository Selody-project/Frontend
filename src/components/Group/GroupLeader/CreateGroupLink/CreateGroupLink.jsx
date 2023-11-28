import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createGroupInviteLink } from "@/features/group/group-service";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	TextDiv,
} from "./CreateGroupLink.styles";

const CreateGroupLink = ({ groupId, setIsCreateLinkClick }) => {
	const dispatch = useDispatch();

	const groupInviteLink = useSelector(
		(state) => state.group.groupInviteLink?.inviteCode,
	);

	const [inviteLink, setInviteLink] = useState(false);

	const createLinkButtonClick = () => {
		dispatch(createGroupInviteLink(groupId));
		setInviteLink(true);
	};

	return (
		<ContainerDiv>
			<TopDiv>
				<h3>그룹 A</h3>
				<h4>
					<button type="button" onClick={createLinkButtonClick}>
						생성하기
					</button>
				</h4>
			</TopDiv>
			<MiddleDiv>
				<TextDiv>{inviteLink ? groupInviteLink : "링크"}</TextDiv>
				<button type="button" onClick={() => setIsCreateLinkClick(false)}>
					확인
				</button>
			</MiddleDiv>
			<h3>* 24시간이 지나거나 새로 생성 시 기존 코드는 만료됩니다.</h3>
		</ContainerDiv>
	);
};

export default CreateGroupLink;
