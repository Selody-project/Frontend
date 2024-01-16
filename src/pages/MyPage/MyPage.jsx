import React, { useState } from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
// import GroupSearch from "@/components/Community/GroupSearch/GroupSearch";

import {
	ContainerMain,
	ProfileSection,
	ProfileLeftDiv,
	ProfileInfoDiv,
	ProfileRightDiv,
	ProfileRightInnerDiv,
	TabDiv,
	TabButton,
	// GroupSection,
} from "./MyPage.styles";

const MyPage = () => {
	const [tab, setTab] = useState("mygroup");
	return (
		<ContainerMain>
			<ProfileSection>
				<ProfileLeftDiv>
					<img src={SampleImg} alt="sampleImg" />
					<ProfileInfoDiv>
						<h3>홍길동</h3>
						<p>자신을 표현하는 간단한 소개글이 들어갑니다.</p>
					</ProfileInfoDiv>
				</ProfileLeftDiv>
				<ProfileRightDiv>
					<ProfileRightInnerDiv>
						<h3>21</h3>
						<h4>참여한 그룹</h4>
					</ProfileRightInnerDiv>
					<ProfileRightInnerDiv>
						<h3>1,240</h3>
						<h4>작성한 피드</h4>
					</ProfileRightInnerDiv>
				</ProfileRightDiv>
			</ProfileSection>
			<TabDiv>
				<ul>
					<li>
						<TabButton
							type="button"
							onClick={() => setTab("mygroup")}
							disabled={tab === "mygroup"}
						>
							내 그룹
						</TabButton>
					</li>
					<li>
						<TabButton
							type="button"
							onClick={() => setTab("requestgroup")}
							disabled={tab === "requestgroup"}
						>
							내가 요청중인 그룹
						</TabButton>
					</li>
				</ul>
			</TabDiv>
		</ContainerMain>
	);
};

export default MyPage;
