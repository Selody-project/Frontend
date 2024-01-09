import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import GroupInfo from "@/components/Group/GroupInfo/GroupInfo";
import Tab from "@/components/Tab/Tab";
import { TAB_OPTION_TITLE, TAB_OPTION_TYPE } from "@/constants/tabConstants";
import { getGroupList } from "@/features/group/group-service";

import {
	ContainerMain,
	ProfileSection,
	ProfileLeftDiv,
	ProfileInfoDiv,
	ProfileRightDiv,
	ProfileRightInnerDiv,
} from "./MyPage.styles";

const MyPage = () => {
	const [tabIndex, setTabIndex] = useState(0);

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
			<Tab
				defaultOption={TAB_OPTION_TYPE.MY_GROUP}
				tabOPTION={TAB_OPTION_TYPE.REQUEST_GROUP}
				defaultTitle={TAB_OPTION_TITLE.MY_GROUP}
				tabTitle={TAB_OPTION_TITLE.REQUEST_GROUP}
				tabIndex={tabIndex}
				setTabIndex={setTabIndex}
			/>
			{tabIndex ? null : <GroupInfo groupInfo={groupList} />}
		</ContainerMain>
	);
};

export default MyPage;
