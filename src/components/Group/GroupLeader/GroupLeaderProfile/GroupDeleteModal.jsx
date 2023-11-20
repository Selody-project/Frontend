import React from "react";
import { useDispatch } from "react-redux";

import BaseModal from "@/components/Base/BaseModal/BaseModal";
import { openModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TitleHeader,
	ContentMain,
	Button,
	ModalFooter,
} from "./GroupDeleteModal.styls";

const modalStyle = {
	padding: "20px",
	backgroundColor: "white",
};

const GroupDeleteModal = ({ groupDetailInfo, isLoading }) => {
	const dispatch = useDispatch();

	return (
		<BaseModal style={modalStyle}>
			<ContainerDiv>
				<TitleHeader>
					<strong>{`${groupDetailInfo?.name}을(를) 정말 삭제하실 건가요?`}</strong>
				</TitleHeader>
				<ContentMain>
					<p className="margin">
						{`삭제하면 ${groupDetailInfo?.name}에 있는 모든 내용이 삭제되어`}
						<br />
						복구가 불가능합니다.
					</p>
					<Button disabled={isLoading}>삭제하기</Button>
				</ContentMain>
				<ModalFooter>
					<p>아니면 이런 방법은 어떠세요?</p>
					<button
						type="button"
						onClick={() => dispatch(openModal({ type: "DELEGATE_GROUP" }))}
					>
						다음 사람에게 위임
					</button>
				</ModalFooter>
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupDeleteModal;
