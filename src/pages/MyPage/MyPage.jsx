import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import GroupInfoList from "@/components/Group/GroupInfoList/GroupInfoList";
import { IntroductionEditIcon } from "@/constants/iconConstants";
import { TAB_CONSTANTS_TITLE } from "@/constants/tabConstants";
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
	const [tabName, setTabName] = useState(TAB_CONSTANTS_TITLE.MY_GROUP);

	const target = useRef(null);

	const navigate = useNavigate();

	const isObserving = useObserver(target, { threshold: 0.3 });

	useEffect(() => {
		dispatch(getUserGroups());
		dispatch(getRequestUserGroups());
	}, []);

	useEffect(() => {
		const dispatchGetGroupList = async () => {
			await dispatch(getGroupList(lastRecordId));
		};

		if (isObserving && !isEnd) {
			dispatchGetGroupList();
		}
	}, [isObserving, dispatch]);

	useEffect(() => {
		if (userGroupList?.length === 0) {
			setGroups(groupList);
		} else if (tabName === TAB_CONSTANTS_TITLE.REQUEST_GROUP) {
			setGroups(userRequestGroupList);
		} else {
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
						<h3>{currentUser.groupCount?.toLocaleString()}</h3>
						<h4>참여한 그룹</h4>
					</ProfileRightInnerDiv>
					<ProfileRightInnerDiv>
						<h3>{currentUser.postCount?.toLocaleString()}</h3>
						<h4>작성한 피드</h4>
					</ProfileRightInnerDiv>
				</ProfileRightDiv>
			</ProfileSection>
			<TabUl role="tablist">
				<li role="tab">
					<TabButton
						isActive={tabName === TAB_CONSTANTS_TITLE.MY_GROUP}
						onClick={() => setTabName(TAB_CONSTANTS_TITLE.MY_GROUP)}
					>
						{TAB_CONSTANTS_TITLE.MY_GROUP}
					</TabButton>
				</li>
				<li role="tab">
					<TabButton
						isActive={tabName === TAB_CONSTANTS_TITLE.REQUEST_GROUP}
						onClick={() => setTabName(TAB_CONSTANTS_TITLE.REQUEST_GROUP)}
					>
						{TAB_CONSTANTS_TITLE.REQUEST_GROUP}
					</TabButton>
				</li>
			</TabUl>

			<GroupInfoList
				groups={groups}
				scrollRef={target}
				isRequest={tabName === TAB_CONSTANTS_TITLE.REQUEST_GROUP}
			/>
		</ContainerMain>
	);
};

export default MyPage;
