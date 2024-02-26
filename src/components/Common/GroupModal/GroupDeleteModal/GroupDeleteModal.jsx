import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import { deleteGroup } from "@/features/group/group-service";
import { closeModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TitleH2,
	ContentDiv,
	Button,
	BottomDiv,
} from "../GroupModal.Shared.styles";

const GroupDeleteModal = ({ groupInfo }) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleDeleteGroup = async () => {
		try {
			if (groupInfo.information.group.member < 2) {
				await dispatch(
					deleteGroup(groupInfo.information.group.groupId),
				).unwrap();
				dispatch(closeModal());
				navigate(`/community?${TAB_KEY}=${TAB_PARAM.MY_GROUP_FEED}`);
			}
		} catch (e) {
			toast.error("그룹 삭제에 실패했습니다.");
		}
	};

	return (
		<BaseModal isUpper>
			<ContainerDiv className="delete-modal">
				<TitleH2>
					<strong>{`${groupInfo.information.group.name}을(를) 정말 삭제하실 건가요?`}</strong>
				</TitleH2>
				<ContentDiv className="delete-modal">
					<p>
						{`삭제하면 ${groupInfo.information.group.name}에 있는 모든 내용이 삭제되어`}
						<br />
						복구가 불가능합니다.
					</p>
					<Button onClick={handleDeleteGroup}>삭제하기</Button>
				</ContentDiv>
				<BottomDiv>
					<p>그룹원이 없어야 삭제가 가능합니다</p>
				</BottomDiv>
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupDeleteModal;
