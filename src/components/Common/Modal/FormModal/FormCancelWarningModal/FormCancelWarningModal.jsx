import React from "react";

import BaseModal from "@/components/Common/Modal/BaseModal";

import {
	ContainerDiv,
	DescriptionP,
	ModalH2,
	SubmitButton,
} from "./FormCancelWarningModal.styles";

const FormCancelWarningModal = ({ onContinue, onCancel }) => {
	return (
		<BaseModal onClose={onContinue} isUpper>
			<ContainerDiv>
				<ModalH2>작성을 멈추시겠습니까?</ModalH2>
				<div>
					<DescriptionP>작성하던 데이터가 삭제되며</DescriptionP>
					<DescriptionP> 복구가 불가능합니다.</DescriptionP>
				</div>
				<SubmitButton type="button" onClick={onCancel}>
					삭제하기
				</SubmitButton>
			</ContainerDiv>
		</BaseModal>
	);
};

export default FormCancelWarningModal;
