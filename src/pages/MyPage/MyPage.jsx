import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import GroupInfo from "@/components/Group/GroupInfo/GroupInfo";
import Tab from "@/components/Tab/Tab";
import { IntroductionEditIcon } from "@/constants/iconConstants";
import { TAB_OPTION_TITLE, TAB_OPTION_TYPE } from "@/constants/tabConstants";
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
} from "./MyPage.styles";

const MyPage = () => {
	const dispatch = useDispatch();

	const auth = useSelector((state) => state.auth.user);

	const { groupList, lastRecordId, isEnd } = useSelector(
		(state) => state.group,
	);
	const { userGroupList, userRequestGroupList } = useSelector(
		(state) => state.user,
	);

	const [groups, setGroups] = useState([]);
	const [tabIndex, setTabIndex] = useState(0);
	const [introduction, setIntroduction] = useState("");

	const target = useRef(null);

	const navigate = useNavigate();

	const isObserving = useObserver(target, { threshold: 0.3 });

	useEffect(() => {
		dispatch(getUserGroups());
		dispatch(getRequestUserGroups());

		if (auth.introduction === "") {
			setIntroduction("소개글을 입력해주세요.");
		} else {
			setIntroduction(auth.introduction);
		}
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
		} else if (tabIndex) {
			setGroups(userRequestGroupList);
		} else {
			setGroups(userGroupList);
		}
	});

	return (
		<ContainerMain>
			<ProfileSection>
				<ProfileLeftDiv>
					<img src={auth.profileImage} alt="profileImg" />
					<ProfileInfoDiv>
						<h3>{auth.nickname}</h3>
						<ProfileIntroductionDiv>
							<p>{introduction}</p>
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
						<h3>{auth.groupCount?.toLocaleString()}</h3>
						<h4>참여한 그룹</h4>
					</ProfileRightInnerDiv>
					<ProfileRightInnerDiv>
						<h3>{auth.postCount?.toLocaleString()}</h3>
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
			<GroupInfo groupInfo={groups} target={target} menu={tabIndex === 1} />
		</ContainerMain>
	);
};

export default MyPage;
