import React from "react";
import { useDispatch } from "react-redux";

import RequestCheckIcon from "@/assets/icon/ic-request-check.svg";
import RequestCloseIcon from "@/assets/icon/ic-request-close.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
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
							<img src={SampleImg} alt="sampleImg" />
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
