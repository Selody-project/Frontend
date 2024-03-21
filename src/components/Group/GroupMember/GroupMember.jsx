import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getGroupRequestMemberList,
	getGroupMemberList,
} from "@/features/group/group-service";

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

	const { user } = useSelector((state) => state.auth);

	const { groupMemberList, groupRequestMemberList } = useSelector(
		(state) => state.group,
	);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			await dispatch(getGroupRequestMemberList(groupId));
			await dispatch(getGroupMemberList(groupId));
			setIsLoading(false);
		})();
	}, []);

	return (
		<ContainerAside>
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

			{isLoading ? (
				<div>로딩중...</div>
			) : (
				<MemberDiv>
					{groupRequestMemberList.length > 0 && (
						<MemberRequestList
							groupId={groupId}
							groupRequestMemberList={groupRequestMemberList}
						/>
					)}

					<MemberList leaderId={leaderId} groupMemberList={groupMemberList} />
				</MemberDiv>
			)}
		</ContainerAside>
	);
};

export default GroupMember;
