import React from "react";

import AddIcon from "@/assets/icon/ic-group-add.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
	GroupReqButton,
} from "./GroupProfile.styles";

const GroupProfile = () => {
	return (
		<ContainerDiv>
			<TopDiv>
				<img src={SampleImg} alt="sampleimg" />
				<h3>CodeCrafters</h3>
				<p>
					당신의 개발 열정을 키우고 함께
					<br />
					성장할 수 있는 공간, CodeCrafters
				</p>
			</TopDiv>
			<MiddleDiv>
				<MiddleInnerDiv>
					<h3>21</h3>
					<h4>그룹원</h4>
				</MiddleInnerDiv>
				<MiddleInnerDiv>
					<h3>1,240</h3>
					<h4>작성된 피드</h4>
				</MiddleInnerDiv>
			</MiddleDiv>
			<GroupReqButton>
				<span>
					<AddIcon />
				</span>
				그룹 참여 요청
			</GroupReqButton>
		</ContainerDiv>
	);
};

export default GroupProfile;
