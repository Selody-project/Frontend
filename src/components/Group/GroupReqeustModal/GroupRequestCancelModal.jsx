import React from "react";
import { useDispatch } from "react-redux";

import { useTheme } from "styled-components";

import BaseModal from "@/components/Base/BaseModal/BaseModal";
import { closeModal } from "@/features/ui/ui-slice";

import { ModalContentDiv, ModalFooter } from "./GroupRequestCancelModal.styles";

const GroupRequestCancelModal = () => {
	const dispatch = useDispatch();
	const theme = useTheme();

	return (
		<BaseModal
			hasHeader={false}
			hasTitle={false}
			hasClose={false}
			bgColor={theme.colors.white}
		>
			<ModalContentDiv>
				<p>요청을 취소하시겠습니까?</p>
			</ModalContentDiv>
			<ModalFooter>
				<button type="button" onClick={() => dispatch(closeModal())}>
					아니요
				</button>
				<button type="button">예</button>
			</ModalFooter>
		</BaseModal>
	);
};

export default GroupRequestCancelModal;
