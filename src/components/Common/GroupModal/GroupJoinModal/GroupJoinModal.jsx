import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import {
	getGroupInfoWithInviteLink,
	joinGroupInviteLink,
} from "@/features/group/group-service";
import { closeModal } from "@/features/ui/ui-slice";

import { ContainerDiv } from "./GroupJoinModal.styles";
import { Button } from "../GroupModal.Shared.styles";

const GroupJoinModal = ({ inviteLink }) => {
	const dispatch = useDispatch();

	const { groupInfoWithInviteLink } = useSelector((state) => state.group);

	const navigate = useNavigate();

	const handleJoinGroup = async () => {
		const { groupId } = groupInfoWithInviteLink;

		try {
			await dispatch(
				joinGroupInviteLink({ groupId, inviteCode: inviteLink }),
			).unwrap();
			dispatch(closeModal());
			navigate(`/community?${TAB_KEY}=${TAB_PARAM.MY_GROUP_FEED}`);
		} catch (e) {
			toast.error("그룹 가입에 실패했습니다.");
		}
	};

	useEffect(() => {
		dispatch(getGroupInfoWithInviteLink(inviteLink));
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{groupInfoWithInviteLink && (
				<BaseModal isUpper>
					<ContainerDiv>
						<img src={groupInfoWithInviteLink.image} alt="groupProfileImg" />
						<h2>
							{groupInfoWithInviteLink.name} ( {groupInfoWithInviteLink.member}
							명 )
						</h2>
						<h3>{groupInfoWithInviteLink.description}</h3>
						<Button onClick={handleJoinGroup}>가입하기</Button>
					</ContainerDiv>
				</BaseModal>
			)}
		</>
	);
};

export default GroupJoinModal;
