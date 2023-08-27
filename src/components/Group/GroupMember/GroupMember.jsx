import React from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	ContainerDiv,
	MemberDiv,
	MemberH3,
	MemberUl,
} from "./GroupMember.styles";

const GroupMember = () => {
	return (
		<ContainerDiv>
			<MemberDiv>
				<MemberH3>내 프로필</MemberH3>
				<MemberUl>
					<li>
						<img src={SampleImg} alt="sampleImg" />
						<h4>홍길동</h4>
					</li>
				</MemberUl>
			</MemberDiv>
			<MemberDiv>
				<MemberH3 list="member">그룹원</MemberH3>
				<MemberUl list="member">
					<li>
						<img src={SampleImg} alt="sampleImg" />
						<h4>홍길동</h4>
					</li>
					<li>
						<img src={SampleImg} alt="sampleImg" />
						<h4>홍길동</h4>
					</li>
				</MemberUl>
			</MemberDiv>
		</ContainerDiv>
	);
};

export default GroupMember;
