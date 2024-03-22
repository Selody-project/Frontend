import React, { useState } from "react";

import FormModal from "@/components/Common/Modal/FormModal/FormModal.jsx";

import {
	ButtonWrapDiv,
	GroupCreateButton,
	GroupIntroduceTextarea,
	GroupNameInput,
} from "./GroupCreateModal.style.js";

const GroupCreateModal = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const handleCreateGroup = (event) => {
		event.preventDefault();
		// 업로드하는 로직
		// ...
	};

	const isEmpty = name.trim() === "" && description.trim() === "";

	return (
		<FormModal isEmpty={isEmpty}>
			{/* <BaseModal title="그룹 만들기" bg="#fff"> */}
			<GroupNameInput
				placeholder="그룹 이름"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<GroupIntroduceTextarea
				placeholder="그룹 소개"
				onChange={(e) => setDescription(e.target.value)}
				value={description}
			/>
			<ButtonWrapDiv>
				<GroupCreateButton
					type="submit"
					disabled={!name.trim()}
					onSubmit={handleCreateGroup}
				>
					생성하기
				</GroupCreateButton>
			</ButtonWrapDiv>
		</FormModal>
	);
};

export default GroupCreateModal;
