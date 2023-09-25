import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import {
	getGroupInfoDetail,
	getGroupRequestMemberList,
} from "@/features/group/group-service";

import {
	MemberInnerDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.Shared.styles";
import { ContainerAside, MemberDiv } from "./GroupMember.styles";
import MemberList from "./MemberList";
import MemberRequestList from "./MemberRequestList";

const GroupMember = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const groupRequestMemberList = useSelector(
		(state) => state.group.groupRequestMemberList,
	);

	useEffect(() => {
		// 추후 유저 그룹 조회 api를 통해 group id를 받아오고 해당 group id로 파라미터 수정
		dispatch(getGroupInfoDetail(21));
		dispatch(getGroupRequestMemberList(21));
	}, []);

	return (
		<ContainerAside>
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
				{groupRequestMemberList.length === 0 || <MemberRequestList />}
				<MemberList />
			</MemberDiv>
		</ContainerAside>
	);
};

export default GroupMember;
