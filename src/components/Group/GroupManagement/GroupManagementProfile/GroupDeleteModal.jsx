import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import BaseModal from "@/components/Base/BaseModal/BaseModal";
import { deleteGroup } from "@/features/group/group-service";
import { openModal } from "@/features/ui/ui-slice";

import {
	ContainerDiv,
	TitleHeader,
	ContentMain,
	Button,
	ModalFooter,
} from "./GroupDeleteModal.styls";

const modalStyle = {
	padding: "20px",
	backgroundColor: "white",
};

const GroupDeleteModal = ({ groupDetailInfo, isLoading }) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const hasGroupMember = groupDetailInfo.member > 1;

	const handleDeleteGroup = async () => {
		try {
			await dispatch(deleteGroup(groupDetailInfo.groupId)).unwrap();
			navigate("/community");
		} catch (e) {
			toast.error("그룹 삭제에 실패했습니다.");
		}
	};

	return (
		<BaseModal style={modalStyle}>
			<ContainerDiv>
				<TitleHeader>
					<strong>{`${groupDetailInfo.name}을(를) 정말 삭제하실 건가요?`}</strong>
				</TitleHeader>
				<ContentMain>
					<p className="margin">
						{`삭제하면 ${groupDetailInfo.name}에 있는 모든 내용이 삭제되어`}
						<br />
						복구가 불가능합니다.
					</p>
					<Button disabled={isLoading} onClick={handleDeleteGroup}>
						삭제하기
					</Button>
				</ContentMain>
				{hasGroupMember && (
					<ModalFooter>
						<p>그룹원이 없어야 삭제가 가능합니다</p>
						<button
							type="button"
							onClick={() => dispatch(openModal({ type: "DELEGATE_GROUP" }))}
						>
							그룹원 내보내기
						</button>
					</ModalFooter>
				)}
			</ContainerDiv>
		</BaseModal>
	);
};

export default GroupDeleteModal;
