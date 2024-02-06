import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import { joinGroupInviteLink } from "@/features/group/group-service";
import { closeModal } from "@/features/ui/ui-slice";
import { getGroupInfoWithInviteLink } from "@/utils/groupInviteUtils";

import { ContainerDiv } from "./GroupJoinModal.styles";
import { Button } from "../GroupModal.Shared.styles";

const GroupJoinModal = ({ inviteLink }) => {
	const dispatch = useDispatch();

	const [groupInfo, setGroupInfo] = useState("");

	const [, setSearchParams] = useSearchParams();

	const navigate = useNavigate();

	const handleJoinGroup = async () => {
		const { groupId } = groupInfo;

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
		getGroupInfoWithInviteLink((data) => setGroupInfo(data), inviteLink);

		return () => {
			setSearchParams("");
		};
	}, []);

	useEffect(() => {
		if (groupInfo && groupInfo.error === "그룹을 찾을 수 없습니다.") {
			dispatch(closeModal());
		}
	}, [groupInfo]);

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
