import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import GroupInfo from "@/components/Group/GroupInfo/GroupInfo";
import { getGroupList } from "@/features/group/group-service";

import {
	ContainerMain,
	ProfileSection,
	ProfileLeftDiv,
	ProfileInfoDiv,
	ProfileRightDiv,
	ProfileRightInnerDiv,
	TabDiv,
	TabButton,
} from "./MyPage.styles";

const MyPage = () => {
	const [tab, setTab] = useState("mygroup");

	const dispatch = useDispatch();

	const groupList = useSelector((state) => state.group.groupList);

	useEffect(() => {
		dispatch(getGroupList(1));
	}, []);

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
			<GroupInfo groupInfo={groupList} />
		</ContainerMain>
	);
};

export default MyPage;
