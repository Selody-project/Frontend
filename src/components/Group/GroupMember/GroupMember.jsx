import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import {
	getGroupInfoDetail,
	getGroupRequestMemberList,
} from "@/features/group/group-service";

import {
	ContainerDiv,
	MemberDiv,
	MemberInnerDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.styles";
import MemberList from "./MemberList";
import MemberRequestList from "./MemberRequestList";

const GroupMember = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatchFn = useDispatch();

	const groupRequestMemberList = useSelector(
		(state) => state.group.groupRequestMemberList,
	);

	useEffect(() => {
		// 추후 유저 그룹 조회 api를 통해 group id를 받아오고 해당 group id로 파라미터 수정
		dispatchFn(getGroupInfoDetail(20));
		dispatchFn(getGroupRequestMemberList(20));
	}, []);

	return (
		<ContainerDiv>
			<MemberDiv>
				<MemberInnerDiv>
					<MemberH3>내 프로필</MemberH3>
					<MemberUl>
						<li>
							<img src={SampleImg} alt="sampleImg" />
							<h4>{user?.nickname}</h4>
						</li>
					</MemberUl>
				</MemberInnerDiv>
			</MemberDiv>
			<MemberDiv>
				{groupRequestMemberList.length === 0 ? null : <MemberRequestList />}
				<MemberList />
			</MemberDiv>
		</ContainerDiv>
	);
};

export default GroupMember;
