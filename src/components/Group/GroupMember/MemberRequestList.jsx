import React from "react";
import { useSelector, useDispatch } from "react-redux";

import RequestCheck from "@/assets/icon/ic-request-check.svg";
import RequestClose from "@/assets/icon/ic-request-close.svg";
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

const MemberRequestList = () => {
	const dispatch = useDispatch();

	const groupRequestMemberList = useSelector(
		(state) => state.group.groupRequestMemberList,
	);

	const approveRequest = (groupId, userId) => {
		dispatch(approveGroupJoin({ groupId, userId }));
	};

	const rejectRequest = (groupId, userId) => {
		dispatch(rejectGroupJoin({ groupId, userId }));
	};

	return (
		<>
			<MemberInnerDiv>
				<MemberH3>그룹원 신청</MemberH3>
				<MemberUl>
					{groupRequestMemberList.map((info) => (
						<li key={info.member.userId}>
							<img src={SampleImg} alt="sampleImg" />
							<h4>{info.member.nickname}</h4>
							<ButtonDiv>
								<ButtonInnerDiv
									onClick={() => {
										approveRequest(20, info.member.userId);
									}}
								>
									<button type="button">
										<RequestCheck />
									</button>
									<span>수락</span>
								</ButtonInnerDiv>
								<ButtonInnerDiv
									onClick={() => {
										rejectRequest(20, info.member.userId);
									}}
								>
									<button type="button">
										<RequestClose />
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
