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

const GroupMember = ({
	isGroupMember,
	leaderId,
	requestMemberList,
	groupInfo,
}) => {
	const dispatch = useDispatch();

	const { groupMemberList } = useSelector((state) => state.group);

	const { user } = useSelector((state) => state.auth);

	const { groupId } = groupInfo.information.group;

	useEffect(() => {
		dispatch(getGroupMemberList(groupId));
	}, []);

	return (
		<ContainerAside>
			{isGroupMember && (
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
					<MemberDiv>
						{requestMemberList.length === 0 || (
							<MemberRequestList
								requestMemberList={requestMemberList}
								groupInfo={groupInfo}
							/>
						)}
						<MemberList
							groupInfo={groupInfo}
							leaderId={leaderId}
							memberList={groupMemberList}
						/>
					</MemberDiv>
				</>
			)}
		</ContainerAside>
	);
};

export default GroupMember;
