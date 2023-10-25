import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Checked from "@/assets/icon/ic-round-checked-mark.svg";
import BaseModal from "@/components/Base/BaseModal/BaseModal";
import {
	delegateGroup,
	deleteGroup,
	leaveGroup,
} from "@/features/group/group-service";
import { setRefetchUserGroup } from "@/features/group/group-slice";
import { closeModal, openModal } from "@/features/ui/ui-slice";
import { useAxios } from "@/hooks/useAxios";

import {
	Button,
	ContainerDiv,
	ContentMain,
	ModalFooter,
	SelectBoxDiv,
	SelectWrapDiv,
	TitleHeader,
} from "./GroupModals.style";

export const GroupDeleteModal = ({ groupInfo, isLoading }) => {
	const { groupId, name } = groupInfo;

	const dispatch = useDispatch();

	const handleClickDelete = async () => {
		const response = await dispatch(deleteGroup(groupId));
		if (response.payload.status === 204) {
			dispatch(closeModal());
			dispatch(setRefetchUserGroup(true));
		}
	};

	return (
		<BaseModal bg="#fff">
			<ContainerDiv>
				<TitleHeader>
					<strong>{`${name}을(를) 정말 삭제하실 건가요?`}</strong>
				</TitleHeader>
				<ContentMain>
					<p className="margin">
						{`삭제하면 ${name}에 있는 모든 내용이 삭제되어`}
						<br />
						복구가 불가능합니다.
					</p>
					<Button onClick={handleClickDelete} disabled={isLoading}>
						삭제하기
					</Button>
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

const SelectBox = ({ name, isSelected, onClick }) => (
	<SelectBoxDiv onClick={onClick} isSelected={isSelected}>
		<div>{isSelected && <Checked />}</div>
		<span>{name}</span>
	</SelectBoxDiv>
);

const mockMembers = [
	{ id: 1, memberName: "그룹원 A" },
	{ id: 2, memberName: "그룹원 B" },
	{ id: 3, memberName: "그룹원 C" },
	{ id: 4, memberName: "그룹원 D" },
];

export const GroupDelegateModal = ({ groupInfo, isGroupLoading }) => {
	const { groupId, name } = groupInfo;

	const dispatch = useDispatch();

	const { response, error, isLoading, refetch } = useAxios({
		url: `/api/group/${groupId}/members`,
		method: "GET",
	});

	const [selectedMemberId, setSelectedMemberId] = useState(null);

	const groupMembers = response?.data.filter(
		({ accessLevel, member }) =>
			accessLevel !== "owner" && !member.isPendingMember,
	);

	const handleClickDelegate = async () => {
		const res = await dispatch(delegateGroup({ groupId, selectedMemberId }));
		if (res.payload.status === 204) {
			dispatch(closeModal());
			dispatch(setRefetchUserGroup(true));
		}
	};

	useEffect(() => {
		refetch();
	}, []);

	return (
		<BaseModal bg="#fff">
			<ContainerDiv>
				<TitleHeader>
					<strong>{`${name}을(를) 위임받을 그룹원을 선택해주세요`}.</strong>
				</TitleHeader>
				<ContentMain>
					<p>
						위임받을 그룹원을 선택하고 위임하기 버튼을 누르면
						<br />
						방장 권한이 해당 사용자에게 넘어갑니다.
					</p>
					<SelectWrapDiv>
						{/* eslint-disable-next-line no-nested-ternary */}
						{isLoading ? (
							<div>Loading...</div>
						) : error ? (
							<div>그룹원 정보를 불러오는 데 실패했습니다.</div>
						) : (
							groupMembers?.map(({ member }) => (
								<SelectBox
									key={member.userId}
									name={member.nickname}
									onClick={() => setSelectedMemberId(member.userId)}
									isSelected={member.userId === selectedMemberId}
								/>
							))
						)}
						{mockMembers.map(({ id, memberName }) => (
							<SelectBox
								key={id}
								name={memberName}
								onClick={() => setSelectedMemberId(id)}
								isSelected={id === selectedMemberId}
							/>
						))}
					</SelectWrapDiv>
					<Button
						onClick={handleClickDelegate}
						disabled={!selectedMemberId || isGroupLoading}
					>
						위임하기
					</Button>
				</ContentMain>
			</ContainerDiv>
		</BaseModal>
	);
};

export const GroupLeaveModal = ({ groupInfo, isLoading }) => {
	const { groupId, name } = groupInfo;

	const dispatch = useDispatch();

	const handleClickLeave = async () => {
		const response = await dispatch(leaveGroup(groupId));
		if (response.payload.status === 204) {
			dispatch(closeModal());
			dispatch(setRefetchUserGroup(true));
		}
	};

	return (
		<BaseModal bg="#fff">
			<ContainerDiv>
				<TitleHeader>
					<strong>{`${name}을(를) 정말 나가실 건가요?`}</strong>
				</TitleHeader>
				<ContentMain>
					<p className="leave-modal">
						{`나가면 사용자가 ${name}에 적은 모든 정보가 삭제되어`}
						<br />
						복구가 불가능합니다.
					</p>
					<Button onClick={handleClickLeave} disabled={isLoading}>
						나가기
					</Button>
				</ContentMain>
			</ContainerDiv>
		</BaseModal>
	);
};
