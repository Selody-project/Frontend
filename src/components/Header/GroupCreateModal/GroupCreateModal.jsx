import React, { useState } from "react";

import BaseModal from "@/components/Common/Modal/BaseModal.jsx";

import {
	ButtonWrapDiv,
	GroupCreateButton,
	GroupIntroduceTextarea,
	GroupNameInput,
} from "./GroupCreateModal.style.js";

const GroupCreateModal = () => {
	const [name, setName] = useState("");
	// const [introduction, setIntroduction] = useState("");

	const handleClick = () => {};

	return (
		<BaseModal>
			{/* <BaseModal title="그룹 만들기" bg="#fff"> */}
			<GroupNameInput
				placeholder="그룹 이름"
				onChange={(e) => setName(e.target.value)}
			/>
			<GroupIntroduceTextarea
				placeholder="그룹 소개"
				// onChange={(e) => setIntroduction(e.target.value)}
			/>
			<ButtonWrapDiv>
				<GroupCreateButton disabled={name.trim() === ""} onClick={handleClick}>
					생성하기
				</GroupCreateButton>
			</ButtonWrapDiv>
		</BaseModal>
	);
};

export default GroupCreateModal;
