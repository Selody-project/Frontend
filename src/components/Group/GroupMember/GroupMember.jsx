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

const GroupMember = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatchFn = useDispatch();

	const groupInfoDetail = useSelector((state) => state.group.groupInfoDetail);

	const groupRequestMemberList = useSelector(
		(state) => state.group.groupRequestMemberList,
	);

	useEffect(() => {
		// 추후 유저 그룹 조회 api를 통해 group id를 받아오고 해당 group id로 파라미터 수정
		dispatchFn(getGroupInfoDetail(2));
		dispatchFn(getGroupRequestMemberList(2));
	}, []);

	console.log(groupInfoDetail);
	console.log(groupRequestMemberList);

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
				<MemberInnerDiv>
					<MemberH3>그룹원 신청</MemberH3>
					<MemberUl list="member">
						{groupRequestMemberList.map((info) => (
							<li key={info.member.userId}>
								<img src={SampleImg} alt="sampleImg" />
								<h4>{info.member.nickname}</h4>
							</li>
						))}
					</MemberUl>
				</MemberInnerDiv>
				<hr />
				<MemberInnerDiv>
					<MemberH3>그룹원</MemberH3>
					<MemberUl list="member">
						{groupInfoDetail?.information.memberInfo.map((info) => (
							<li key={info.userId}>
								<img src={SampleImg} alt="sampleImg" />
								<h4>{info.nickname}</h4>
							</li>
						))}
					</MemberUl>
				</MemberInnerDiv>
			</MemberDiv>
		</ContainerDiv>
	);
};

export default GroupMember;
