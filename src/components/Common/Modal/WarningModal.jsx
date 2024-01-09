import React from "react";

import BaseModal from "./BaseModal";
import { TitleH2 } from "./WarningModal.style";

const WarningModal = () => {
	return (
		<BaseModal>
			<TitleH2>작성을 멈추시겠습니까?</TitleH2>
		</BaseModal>
	);
};

export default WarningModal;
