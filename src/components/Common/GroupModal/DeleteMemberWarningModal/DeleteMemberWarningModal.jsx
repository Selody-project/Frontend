import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { deleteGroupMember } from "@/features/group/group-service";
import { closeModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TitleH2,
	ContentDiv,
	Button,
} from "../GroupModal.Shared.styles";

const DeleteMemberWarningModal = ({ groupId }) => {
	const dispatch = useDispatch();

	const { warningModalUserInfo } = useSelector((state) => state.ui);

	const handleDeleteMember = async () => {
		try {
			await dispatch(
				deleteGroupMember({
					groupId,
					userId: warningModalUserInfo.member.userId,
				}),
			).unwrap();
		} catch (error) {
			toast.error("그룹원 내보내기에 실패했습니다.");
		}
		dispatch(closeModal());
	};

	return (
		<BaseModal isUpper>
			<ContainerDiv>
				<TitleH2>
					<strong>
						{warningModalUserInfo.member.nickname}을(를) 정말 내보내실건가요?
					</strong>
				</TitleH2>
				<ContentDiv>
					<p>
						사용자 {warningModalUserInfo.member.nickname}가 작성한 모든 정보가
						삭제되어
						<br />
						복구가 불가능합니다.
					</p>
					<Button onClick={handleDeleteMember}>내보내기</Button>
				</ContentDiv>
			</ContainerDiv>
		</BaseModal>
	);
};

export default DeleteMemberWarningModal;
