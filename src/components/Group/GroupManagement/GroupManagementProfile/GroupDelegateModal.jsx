import React, { useState } from "react";
import { useDispatch } from "react-redux";

import BaseModal from "@/components/Base/BaseModal/BaseModal";
import { CheckIcon } from "@/constants/iconConstants";
import { delegateGroup } from "@/features/group/group-service";
import { setRefetchUserGroup } from "@/features/group/group-slice";
import { closeModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	ContentMain,
	SelectBoxDiv,
	SelectWrapDiv,
	TitleHeader,
	Button,
} from "./GroupDelegateModal.styles";

const modalStyle = {
	padding: "20px",
	backgroundColor: "white",
};

const SelectBox = ({ name, isSelected, onClick }) => (
	<SelectBoxDiv onClick={onClick} isSelected={isSelected}>
		<div>{isSelected && <CheckIcon />}</div>
		<span>{name}</span>
	</SelectBoxDiv>
);

const GroupDelegateModal = ({ groupDetailInfo, groupMembers }) => {
	const dispatch = useDispatch();

	const [selectedMemberId, setSelectedMemberId] = useState(null);

	const handleClickDelegate = async () => {
		const { groupId } = groupDetailInfo;

		await dispatch(delegateGroup({ groupId, selectedMemberId }));
		dispatch(closeModal());
		dispatch(setRefetchUserGroup(true));
	};

	const handleClickSelectBox = (userId) => {
		setSelectedMemberId((prev) => (prev === userId ? null : userId));
	};

	const memberList = groupMembers.filter(
		(info) => info.userId !== groupDetailInfo?.leader,
	);

	return (
		<BaseModal style={modalStyle}>
			<ContainerDiv>
				<TitleHeader>
					<strong>{`${groupDetailInfo?.name}을(를) 위임받을 그룹원을 선택해주세요.`}</strong>
				</TitleHeader>
				<ContentMain>
					<p>
						위임받을 그룹원을 선택하고 위임하기 버튼을 누르면
						<br />
						방장 권한이 해당 사용자에게 넘어갑니다.
					</p>
					<SelectWrapDiv>
						{memberList.map((info) => (
							<SelectBox
								key={info.userId}
								name={info.nickname}
								onClick={() => handleClickSelectBox(info.userId)}
								isSelected={info.userId === selectedMemberId}
							/>
						))}
					</SelectWrapDiv>
					<Button onClick={handleClickDelegate} disabled={!selectedMemberId}>
						위임하기
					</Button>
				</ContentMain>
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupDelegateModal;
