import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormModal from "@/components/Common/Modal/FormModal/FormModal.jsx";
import { createGroup } from "@/features/group/group-service.js";
import { closeModal } from "@/features/ui/ui-slice.js";

import {
	ButtonWrapDiv,
	GroupCreateButton,
	GroupIntroduceTextarea,
	GroupNameInput,
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
