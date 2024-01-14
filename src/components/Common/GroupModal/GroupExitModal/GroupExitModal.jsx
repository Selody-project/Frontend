import React from "react";
import { useDispatch } from "react-redux";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { openModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TitleH2,
	ContentDiv,
	Button,
} from "../GroupModal.Shared.styles";

const GroupExitModal = () => {
	const dispatch = useDispatch();

	return (
		<BaseModal isUpper>
			<ContainerDiv>
				<TitleH2>
					<strong>그룹을 나가시겠습니까?</strong>
				</TitleH2>
				<ContentDiv>
					<p>
						그룹장 권한을 위임한 후에 그룹을 나갈 수 있습니다.
						<br />
						그룹장을 위임하시겠습니까?
					</p>
					<Button
						onClick={() => dispatch(openModal({ type: "DELEGATE_GROUP" }))}
					>
						그룹장 위임
					</Button>
				</ContentDiv>
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupExitModal;
