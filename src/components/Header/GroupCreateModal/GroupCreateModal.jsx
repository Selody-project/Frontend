import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormModal from "@/components/Common/Modal/FormModal/FormModal.jsx";
import { createGroup } from "@/features/group/group-service.js";
import { closeModal } from "@/features/ui/ui-slice.js";

import {
	TopDiv,
	TitleH2,
	GroupNameH3,
	GroupNameTextarea,
	GroupIntroduceH3,
	GroupIntroduceTextarea,
	ButtonWrapDiv,
	GroupCreateButton,
} from "./GroupCreateModal.style.js";

const GroupCreateModal = () => {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const handleCreateGroup = (event) => {
		event.preventDefault();
		dispatch(createGroup({ name, description }));
		dispatch(closeModal({ type: "CREATE_GROUP" }));
	};

	const isEmpty = name.trim() === "" && description.trim() === "";

	return (
		<FormModal isEmpty={isEmpty}>
			<TopDiv>
				<TitleH2>그룹 만들기</TitleH2>
			</TopDiv>
			<GroupNameH3>그룹 이름</GroupNameH3>
			<GroupNameTextarea
				onChange={(e) => setName(e.target.value)}
				maxLength={20}
			/>
			<GroupIntroduceH3>그룹 소개</GroupIntroduceH3>
			<GroupIntroduceTextarea
				onChange={(e) => setDescription(e.target.value)}
				maxLength={100}
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
