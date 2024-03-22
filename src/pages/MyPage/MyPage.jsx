import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import GroupInfoList from "@/components/Group/GroupInfoList/GroupInfoList";
import { IntroductionEditIcon } from "@/constants/iconConstants";
import {
	TAB_CONSTANTS_TITLE,
	TAB_KEY,
	TAB_PARAM,
} from "@/constants/tabConstants";

import {
	ContainerMain,
	ProfileSection,
	ProfileLeftDiv,
	ProfileInfoDiv,
	ProfileIntroductionDiv,
	ProfileRightDiv,
	ProfileRightInnerDiv,
	TabUl,
	TabButton,
} from "./MyPage.styles";

const MyPage = () => {
	const { user } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		if (
			!searchParams ||
			(searchParams.get("tab") !== "group" &&
				searchParams.get("tab") !== "request")
		) {
			setSearchParams("tab=group");
		}
	}, []);

	return (
		<ContainerMain>
			<ProfileSection>
				<ProfileLeftDiv>
					<img src={user.profileImage} alt="profileImg" />
					<ProfileInfoDiv>
						<h3>{user.nickname}</h3>
						<ProfileIntroductionDiv>
							<p>{user.introduction || "소개글을 입력해주세요"}</p>
							<IntroductionEditIcon
								onClick={() => {
									navigate("/setting");
								}}
							/>
						</ProfileIntroductionDiv>
					</ProfileInfoDiv>
				</ProfileLeftDiv>
				<ProfileRightDiv>
					<ProfileRightInnerDiv>
						<h3>{user.groupCount.toLocaleString()}</h3>
						<h4>참여한 그룹</h4>
					</ProfileRightInnerDiv>
					<ProfileRightInnerDiv>
						<h3>{user.postCount.toLocaleString()}</h3>
						<h4>작성한 피드</h4>
					</ProfileRightInnerDiv>
				</ProfileRightDiv>
			</ProfileSection>
			<TabUl role="tablist">
				<li role="tab">
					<TabButton
						isActive={searchParams.get(TAB_KEY) === TAB_PARAM.MY_GROUP}
						onClick={() => navigate(`/mypage?${TAB_KEY}=${TAB_PARAM.MY_GROUP}`)}
					>
						{TAB_CONSTANTS_TITLE.MY_GROUP}
					</TabButton>
				</li>
				<li role="tab">
					<TabButton
						isActive={searchParams.get(TAB_KEY) === TAB_PARAM.REQUEST_GROUP}
						onClick={() =>
							navigate(`/mypage?${TAB_KEY}=${TAB_PARAM.REQUEST_GROUP}`)
						}
					>
						{TAB_CONSTANTS_TITLE.REQUEST_GROUP}
					</TabButton>
				</li>
			</TabUl>

			<GroupInfoList isMyPage searchParams={searchParams} />
		</ContainerMain>
	);
};

export default MyPage;
