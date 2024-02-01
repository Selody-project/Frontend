import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RequestCheckIcon, RequestCloseIcon } from "@/constants/iconConstants";
import {
	approveGroupJoin,
	rejectGroupJoin,
} from "@/features/group/group-service";
import { openMemberModal } from "@/features/ui/ui-slice";

import {
	MemberInnerDiv,
	MemberTitleDiv,
	MemberH3,
	MemberMoreSpan,
	MemberUl,
} from "./GroupMember.Shared.styles";
import { ButtonDiv, ButtonInnerDiv } from "./GroupMember.styles";
import MemberModal from "./MemberModal";

const MemberRequestList = ({ requestMemberList, groupInfo }) => {
	const dispatch = useDispatch();

	const { openedModal } = useSelector((state) => state.ui);

	const { groupId } = groupInfo.information.group;

	const approveRequest = (userId) => {
		dispatch(approveGroupJoin({ groupId, userId }));
	};

	const rejectRequest = (userId) => {
		dispatch(rejectGroupJoin({ groupId, userId }));
	};

	return (
		<>
			<MemberInnerDiv>
				<MemberTitleDiv>
					<MemberH3>그룹원 신청</MemberH3>
					{requestMemberList.length > 3 && (
						<MemberMoreSpan onClick={() => dispatch(openMemberModal())}>
							더보기
						</MemberMoreSpan>
					)}
				</MemberTitleDiv>
				<MemberUl>
					{requestMemberList.slice(0, 3).map((info) => (
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
				{openedModal === "MEMBER_MODAL" && <MemberModal />}
			</MemberInnerDiv>
			<hr />
		</>
	);
};

export default MemberRequestList;
