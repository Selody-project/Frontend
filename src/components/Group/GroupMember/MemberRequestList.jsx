import React from "react";
import { useDispatch } from "react-redux";

import { RequestCheckIcon, RequestCloseIcon } from "@/constants/iconConstants";
import {
	approveGroupJoin,
	rejectGroupJoin,
} from "@/features/group/group-service";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.Shared.styles";
import { ButtonDiv, ButtonInnerDiv } from "./GroupMember.styles";

const MemberRequestList = ({ requestMemberList, groupId }) => {
	const dispatch = useDispatch();

	const approveRequest = (userId) => {
		dispatch(approveGroupJoin({ groupId, userId }));
	};

	const rejectRequest = (userId) => {
		dispatch(rejectGroupJoin({ groupId, userId }));
	};

	return (
		<>
			<MemberInnerDiv>
				<MemberH3>그룹원 신청</MemberH3>
				<MemberUl>
					{requestMemberList.map((info) => (
						<li key={info.member.userId}>
							<img src={info.member.image} alt="memberImg" />
							<h4>{info.member.nickname}</h4>
							<ButtonDiv>
								<ButtonInnerDiv
									onClick={() => {
										approveRequest(info.member.userId);
									}}
								>
									<button type="button">
										<RequestCheckIcon />
									</button>
									<span>수락</span>
								</ButtonInnerDiv>
								<ButtonInnerDiv
									onClick={() => {
										rejectRequest(info.member.userId);
									}}
								>
									<button type="button">
										<RequestCloseIcon />
									</button>
									<span>거절</span>
								</ButtonInnerDiv>
							</ButtonDiv>
						</li>
					))}
				</MemberUl>
			</MemberInnerDiv>
			<hr />
		</>
	);
};

export default MemberRequestList;
