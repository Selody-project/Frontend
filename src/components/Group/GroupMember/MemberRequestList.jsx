import React from "react";
import { useSelector, useDispatch } from "react-redux";

import RequestCheck from "@/assets/icon/ic-request-check.svg";
import RequestClose from "@/assets/icon/ic-request-close.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import {
	approveGroupRequest,
	rejectGroupRequest,
} from "@/features/group/group-service";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
	ButtonDiv,
	ButtonInnerDiv,
} from "./GroupMember.styles";

const MemberRequestList = () => {
	const dispatch = useDispatch();

	const groupRequestMemberList = useSelector(
		(state) => state.group.groupRequestMemberList,
	);

	const approveRequest = (groupId, userId) => {
		dispatch(approveGroupRequest({ groupId, userId }));
	};

	const rejectRequest = (groupId, userId) => {
		dispatch(rejectGroupRequest({ groupId, userId }));
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
									<h5>수락</h5>
								</ButtonInnerDiv>
								<ButtonInnerDiv
									onClick={() => {
										rejectRequest(20, info.member.userId);
									}}
								>
									<button type="button">
										<RequestClose />
									</button>
									<h5>거절</h5>
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
