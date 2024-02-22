import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import GroupInfoList from "@/components/Group/GroupInfoList/GroupInfoList";
import { IntroductionEditIcon } from "@/constants/iconConstants";
import {
	TAB_CONSTANTS_TITLE,
	TAB_KEY,
	TAB_PARAM,
} from "@/constants/tabConstants";
import { getGroupList } from "@/features/group/group-service";
import {
	getUserGroups,
	getRequestUserGroups,
} from "@/features/user/user-service";
import useObserver from "@/hooks/useObserver";

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
	const dispatch = useDispatch();

	const currentUser = useSelector((state) => state.auth.user);
	const { groupList, lastRecordId, isEnd } = useSelector(
		(state) => state.group,
	);
	const { userGroupList, userRequestGroupList } = useSelector(
		(state) => state.user,
	);

	const [groups, setGroups] = useState([]);

	const target = useRef(null);

	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	const isObserving = useObserver(target, { threshold: 0.3 });

	useEffect(() => {
		dispatch(getUserGroups());
		dispatch(getRequestUserGroups());

		if (
			!searchParams ||
			(searchParams.get("tab") !== "group" &&
				searchParams.get("tab") !== "request")
		) {
			setSearchParams("tab=group");
		}
	}, []);

	useEffect(() => {
		if (isObserving && !isEnd) {
			dispatch(getGroupList(lastRecordId));
		}
	}, [isObserving, dispatch]);

	useEffect(() => {
		if (
			userGroupList?.length === 0 &&
			searchParams.get(TAB_KEY) === TAB_PARAM.MY_GROUP
		) {
			setGroups(groupList);
		} else if (searchParams.get(TAB_KEY) === TAB_PARAM.REQUEST_GROUP) {
			setGroups(userRequestGroupList);
		} else if (searchParams.get(TAB_KEY) === TAB_PARAM.MY_GROUP) {
			setGroups(userGroupList);
		}
	});

	return (
		<ContainerMain>
			<ProfileSection>
				<ProfileLeftDiv>
					<img src={currentUser.profileImage} alt="profileImg" />
					<ProfileInfoDiv>
						<h3>{currentUser.nickname}</h3>
						<ProfileIntroductionDiv>
							<p>{currentUser.introduction || "소개글을 입력해주세요"}</p>
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
						<h3>{currentUser.groupCount.toLocaleString()}</h3>
						<h4>참여한 그룹</h4>
					</ProfileRightInnerDiv>
					<ProfileRightInnerDiv>
						<h3>{currentUser.postCount.toLocaleString()}</h3>
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

			<GroupInfoList
				groups={groups}
				scrollRef={target}
				isRequest={searchParams.get(TAB_KEY) === TAB_PARAM.REQUEST_GROUP}
			/>
		</ContainerMain>
	);
};

export default MyPage;
