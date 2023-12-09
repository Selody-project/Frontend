import React from "react";

import BaseModal from "@/components/Base/BaseModal/BaseModal";

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
						그룹장을 위임하시겠습니다.
					</p>
					<Button>삭제하기</Button>
				</ContentMain>
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupExitModal;
