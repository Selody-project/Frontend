import React from "react";

import AddIcon from "@/assets/icon/ic-group-add.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
	BottomDiv,
} from "./GroupProfile.styles";

const GroupProfile = ({ groupInfo, isGroupMember }) => {
	return (
		<ContainerDiv>
			<TopDiv>
				<img src={SampleImg} alt="sampleimg" />
				<h3>{groupInfo?.information.group.name}</h3>
				<p>{groupInfo?.information.group.description}</p>
			</TopDiv>
			<MiddleDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.group.member.toLocaleString()}</h3>
					<h4>그룹원</h4>
				</MiddleInnerDiv>
				<MiddleInnerDiv>
					<h3>{groupInfo?.information.group.feedCount.toLocaleString()}</h3>
					<h4>작성된 피드</h4>
				</MiddleInnerDiv>
			</MiddleDiv>
			<BottomDiv>
				<button type="button">
					{isGroupMember ? (
						"그룹 나가기"
					) : (
						<>
							<AddIcon />
							그룹 참여 요청
						</>
					)}
				</button>
			</BottomDiv>
		</ContainerDiv>
	);
};

export default GroupProfile;
