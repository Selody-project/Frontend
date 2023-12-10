import React from "react";
import { useDispatch } from "react-redux";

import BaseModal from "@/components/Base/BaseModal/BaseModal";
import { openModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TitleHeader,
	ContentMain,
	Button,
} from "./GroupExitModal.styls";

const modalStyle = {
	padding: "20px",
	backgroundColor: "white",
};

const GroupExitModal = () => {
	const dispatch = useDispatch();

	return (
		<BaseModal style={modalStyle}>
			<ContainerDiv>
				<TitleHeader>
					<strong>그룹장을 위임하실건가요?</strong>
				</TitleHeader>
				<ContentMain>
					<p className="margin">
						그룹장 권한을 위임한 후에 그룹을 나갈 수 있습니다.
						<br />
						그룹장을 위임하시겠습니까?
					</p>
					<Button
						onClick={() => dispatch(openModal({ type: "DELEGATE_GROUP" }))}
					>
						그룹장 위임
					</Button>
				</ContentMain>
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupExitModal;
