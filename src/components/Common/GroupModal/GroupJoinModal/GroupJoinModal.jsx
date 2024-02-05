import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import { closeModal } from "@/features/ui/ui-slice";
import {
	getGroupInfoWithInviteLink,
	joinGroupInviteLink,
} from "@/utils/groupInviteUtils";

import { ContainerDiv } from "./GroupJoinModal.styles";
import { Button } from "../GroupModal.Shared.styles";

const GroupJoinModal = ({ inviteLink }) => {
	const dispatch = useDispatch();

	const [, setIsLoading] = useState(true);
	const [groupInfo, setGroupInfo] = useState("");

	const [, setSearchParams] = useSearchParams();

	const navigate = useNavigate();

	const handleJoinGroup = async () => {
		const { groupId } = groupInfo;

		joinGroupInviteLink(groupId, inviteLink, setIsLoading);
		dispatch(closeModal());
		navigate(`/community?${TAB_KEY}=${TAB_PARAM.MY_GROUP_FEED}`);
	};

	useEffect(() => {
		// dispatch(getGroupInfoWithInviteLink(inviteLink));
		getGroupInfoWithInviteLink(setGroupInfo, inviteLink, setIsLoading);

		return () => {
			setSearchParams("");
		};
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{groupInfo && (
				<BaseModal isUpper>
					<ContainerDiv>
						<img src={groupInfo.image} alt="groupProfileImg" />
						<h2>
							{groupInfo.name} ( {groupInfo.member}명 )
						</h2>
						<h3>{groupInfo.description}</h3>
						<Button onClick={handleJoinGroup}>가입하기</Button>
					</ContainerDiv>
				</BaseModal>
			)}
		</>
	);
};

export default GroupJoinModal;
