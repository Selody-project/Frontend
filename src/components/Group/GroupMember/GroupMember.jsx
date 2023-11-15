import React from "react";
import { useSelector } from "react-redux";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.Shared.styles";
import { ContainerAside, MemberDiv } from "./GroupMember.styles";
import MemberList from "./MemberList";
import MemberRequestList from "./MemberRequestList";

const GroupMember = ({ requestMemberList, groupId }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<ContainerAside>
			<MemberDiv>
				<MemberInnerDiv>
					<MemberH3>내 프로필</MemberH3>
					<MemberUl>
						<li>
							<img src={user?.profileImage} alt="profileImg" />
							<h4>{user?.nickname}</h4>
						</li>
					</MemberUl>
				</MemberInnerDiv>
			</MemberDiv>
			<MemberDiv>
				{requestMemberList?.length === 0 || (
					<MemberRequestList
						requestMemberList={requestMemberList}
						groupId={groupId}
					/>
				)}
				<MemberList groupId={groupId} />
			</MemberDiv>
		</ContainerAside>
	);
};

export default GroupMember;