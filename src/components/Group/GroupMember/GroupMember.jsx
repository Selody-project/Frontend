import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { getGroupInfoDetail } from "@/features/group/group-service";

import {
	ContainerDiv,
	MemberDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.styles";

const GroupMember = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatchFn = useDispatch();

	const groupInfoDetail = useSelector((state) => state.group.groupInfoDetail);

	useEffect(() => {
		// 추후 유저 그룹 조회 api를 통해 group id를 받아오고 해당 group id로 파라미터 수정
		dispatchFn(getGroupInfoDetail(2));
	}, []);

	return (
		<ContainerDiv>
			<MemberDiv>
				<MemberH3>내 프로필</MemberH3>
				<MemberUl>
					<li>
						<img src={SampleImg} alt="sampleImg" />
						<h4>{user?.nickname}</h4>
					</li>
				</MemberUl>
			</MemberDiv>
			<MemberDiv>
				<MemberH3 list="member">그룹원</MemberH3>
				<MemberUl list="member">
					{groupInfoDetail?.memberInfo.map((info) => (
						<li key={info.userId}>
							<img src={SampleImg} alt="sampleImg" />
							<h4>{info.nickname}</h4>
						</li>
					))}
				</MemberUl>
			</MemberDiv>
		</ContainerDiv>
	);
};

export default GroupMember;
