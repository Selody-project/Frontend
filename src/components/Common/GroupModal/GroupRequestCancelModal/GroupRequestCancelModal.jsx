import React from "react";
import { useDispatch } from "react-redux";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { changeRequestGroupJoin } from "@/features/group/group-service";
import { closeModal } from "@/features/ui/ui-slice";

import { ModalContentDiv, ModalFooter } from "./GroupRequestCancelModal.styles";

const modalStyle = {
	padding: "20px",
	backgroundColor: "white",
};

const GroupRequestCancelModal = ({ groupId }) => {
	const dispatch = useDispatch();

	const handleCancelGroupJoin = () => {
		dispatch(changeRequestGroupJoin(groupId));
		dispatch(closeModal());
	};

	return (
		<BaseModal style={modalStyle}>
			<ModalContentDiv>
				<p>요청을 취소하시겠습니까?</p>
			</ModalContentDiv>
			<ModalFooter>
				<button type="button" onClick={() => dispatch(closeModal())}>
					아니요
				</button>
				<button type="button" onClick={handleCancelGroupJoin}>
					예
				</button>
			</ModalFooter>
		</BaseModal>
	);
};

export default GroupRequestCancelModal;
