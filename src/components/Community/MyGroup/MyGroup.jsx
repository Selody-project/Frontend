import React from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import SampleImg2 from "@/assets/img/feed/img-group-sample-02.jpeg";

import { GroupDiv, ListDiv, ItemDiv, CircleDiv } from "./MyGroup.styles";

const MyGroup = () => {
	return (
		<GroupDiv>
			<h3>내 그룹</h3>
			<ListDiv>
				<ItemDiv>
					<CircleDiv>
						<img src={SampleImg} alt="sampleimg" />
					</CircleDiv>
					<h4>디자인 스터디</h4>
				</ItemDiv>
				<ItemDiv>
					<CircleDiv>
						<img src={SampleImg2} alt="sampleimg2" />
					</CircleDiv>
					<h4>음악 동아리</h4>
				</ItemDiv>
			</ListDiv>
		</GroupDiv>
	);
};

export default MyGroup;
