import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import IntroductionEditIcon from "@/assets/icon/ic-description-edit.svg";
import GroupInfo from "@/components/Group/GroupInfo/GroupInfo";
import Tab from "@/components/Tab/Tab";
import { TAB_OPTION_TITLE, TAB_OPTION_TYPE } from "@/constants/tabConstants";
import { getGroupList } from "@/features/group/group-service";
import { inqueryUserGroup } from "@/features/user/user-service";
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

	const userGroup = useSelector((state) => state.user.userGroupList.groupList);
	const auth = useSelector((state) => state.auth.user);
	const groupList = useSelector((state) => state.group.groupList);
	const lastRecordId = useSelector((state) => state.group.lastRecordId);

	const [group, setGroup] = useState([]);
	const [tabIndex, setTabIndex] = useState(0);
	const [introduction, setIntroduction] = useState("");

	const target = useRef(null);

	const navigate = useNavigate();

	const isObserving = useObserver(target, { threshold: 0.3 });

	useEffect(() => {
		dispatch(inqueryUserGroup());

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

		if (isObserving) {
			dispatchGetGroupList();
		}
	}, [isObserving, dispatch]);

	useEffect(() => {
		if (userGroup?.length === 0) {
			setGroup(groupList);
		} else {
			setGroup(userGroup);
		}
	});

	return (
		<ContainerMain>
			<ProfileSection>
				<ProfileLeftDiv>
					<img src={auth.profileImage} alt="sampleImg" />
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
			{tabIndex ? null : <GroupInfo groupInfo={group} target={target} />}
		</ContainerMain>
	);
};

export default MyPage;
