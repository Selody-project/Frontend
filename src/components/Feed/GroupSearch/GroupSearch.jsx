import React from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import { ContainerDiv, GroupDiv } from "./GroupSearch.styles";

const GroupSearch = () => {
	return (
		<ContainerDiv>
			<GroupDiv>
				<img src={SampleImg} alt="sampleimg" />
				<h3>CodeCrafters</h3>
				<p>
					당신의 개발 열정을 키우고
					<br />
					함께 성장할 수 있는 공간, CodeCrafters
				</p>
				<h4>21명의 그룹원</h4>
			</GroupDiv>
			<GroupDiv />
			<GroupDiv />
			<GroupDiv />
			<GroupDiv />
			<GroupDiv />
		</ContainerDiv>
	);
};

export default GroupSearch;
