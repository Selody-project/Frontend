import React from "react";
import { useDispatch } from "react-redux";

import BaseModal from "@/components/Common/Modal/BaseModal";
import { RequestCheckIcon, RequestCloseIcon } from "@/constants/iconConstants";
import {
	approveGroupJoin,
	rejectGroupJoin,
} from "@/features/group/group-service";

import {
	ContainerDiv,
	TitleH2,
	ContentDiv,
	MemberUl,
	MemberLi,
	ProfileDiv,
	ButtonDiv,
} from "./MemberModal.styles";

const MemberModal = ({ requestMemberList, groupId }) => {
	const dispatch = useDispatch();

	const approveRequest = (userId) => {
		dispatch(approveGroupJoin({ groupId, userId }));
	};

	const rejectRequest = (userId) => {
		dispatch(rejectGroupJoin({ groupId, userId }));
	};

	return (
		<BaseModal>
			<ContainerDiv>
				<TitleH2>그룹원 신청</TitleH2>
				<ContentDiv>
					<MemberUl>
						{requestMemberList.map((memberData) => (
							<MemberLi key={memberData.member.nickname}>
								<ProfileDiv>
									<img
										src={memberData.member.image}
										alt={`${memberData.member.nickname}님의 이미지`}
									/>
									<h3>{memberData.member.nickname}</h3>
								</ProfileDiv>
								<ButtonDiv>
									<button
										type="button"
										onClick={() => {
											approveRequest(memberData.member.userId);
										}}
									>
										<RequestCheckIcon />
									</button>
									<button
										type="button"
										onClick={() => {
											rejectRequest(memberData.member.userId);
										}}
									>
										<RequestCloseIcon />
									</button>
								</ButtonDiv>
							</MemberLi>
						))}
					</MemberUl>
				</ContentDiv>
			</ContainerDiv>
		</BaseModal>
	);
};

export default MemberModal;
