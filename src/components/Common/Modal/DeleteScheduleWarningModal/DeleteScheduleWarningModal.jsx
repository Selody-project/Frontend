import React from "react";

import BaseModal from "@/components/Common/Modal/BaseModal";

import {
	ContainerDiv,
	DescriptionP,
	ModalH2,
	SubmitButton,
} from "./DeleteScheduleWarningModal.styles";

const DeleteScheduleWarningModal = ({ onCancel, onDelete }) => {
	return (
		<BaseModal onClose={onCancel}>
			<ContainerDiv>
				<ModalH2>일정을 삭제하시겠습니까?</ModalH2>
				<div>
					<DescriptionP>해당 일정에 대한 정보가 삭제되어</DescriptionP>
					<DescriptionP>복구가 불가능합니다.</DescriptionP>
				</div>
				<SubmitButton type="button" onClick={onDelete}>
					삭제하기
				</SubmitButton>
			</ContainerDiv>
		</BaseModal>
	);
};

export default DeleteScheduleWarningModal;
