import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGroupMemberList } from "@/features/group/group-service";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.Shared.styles";
import { ContainerAside, MemberDiv } from "./GroupMember.styles";
import MemberList from "./MemberList";
import MemberRequestList from "./MemberRequestList";

const GroupMember = ({ leaderId, groupId }) => {
	const dispatch = useDispatch();

	const { groupRequestMemberList, isMemberListLoading } = useSelector(
		(state) => state.group,
	);

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getGroupMemberList(groupId));
	}, []);

	return (
		<ContainerAside>
			<>
				<MemberDiv>
					<MemberInnerDiv>
						<MemberH3>내 프로필</MemberH3>
						<MemberUl>
							<li>
								<img src={user.profileImage} alt="profileImg" />
								<h4>{user.nickname}</h4>
							</li>
						</MemberUl>
					</MemberInnerDiv>
				</MemberDiv>

				{isMemberListLoading ? (
					<div>로딩 중</div>
				) : (
					<MemberDiv>
						{groupRequestMemberList.length > 0 && (
							<MemberRequestList
								requestMemberList={groupRequestMemberList}
								groupId={groupId}
							/>
						)}
						<MemberList leaderId={leaderId} />
					</MemberDiv>
				)}
			</>
		</ContainerAside>
	);
};

export default GroupMember;
