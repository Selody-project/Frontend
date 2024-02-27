import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { TAB_KEY, TAB_PARAM } from "@/constants/tabConstants";
import { changeRequestGroupJoin } from "@/features/group/group-service";
import { closeModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TitleH2,
	ContentDiv,
	Button,
} from "../GroupModal.Shared.styles";

const GroupRequestCancelModal = ({ groupId, groupName }) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleCancelGroupJoin = async () => {
		try {
			await dispatch(changeRequestGroupJoin(groupId)).unwrap();
			dispatch(closeModal());
			navigate(`/mypage?${TAB_KEY}=${TAB_PARAM.REQUEST_GROUP}`);
		} catch (e) {
			toast.error("요청 취소에 실패했습니다.");
		}
	};

	return (
		<BaseModal isUpper>
			<ContainerDiv>
				<TitleH2>
					<strong>요청을 취소하시겠습니까?</strong>
				</TitleH2>
				<ContentDiv>
					<p>요청이 취소되면 {groupName}에 들어갈 수 없습니다.</p>
					<Button onClick={handleCancelGroupJoin}>요청 취소</Button>
				</ContentDiv>
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupRequestCancelModal;
