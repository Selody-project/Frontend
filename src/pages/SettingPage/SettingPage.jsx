import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
	GroupDelegateModal,
	GroupDeleteModal,
	GroupLeaveModal,
} from "@/components/Setting/GroupModals/GroupModals";
import PasswordTab from "@/components/Setting/PasswordTab/PasswordTab";
import ProfileTab from "@/components/Setting/ProfileTab";
import WithdrawalTab from "@/components/Setting/WithdrawalTab/WithdrawalTab";
import { UI_TYPE } from "@/constants/uiConstants";

import {
	ContainerDiv,
	MainSection,
	TabLi,
	TabsAside,
	TabsUl,
} from "./SettingPage.style";

const SettingPage = () => {
	const { openedModal } = useSelector((state) => state.ui);
	const { groupInfo, isLoading } = useSelector((state) => state.group);

	const [selectedTabIdx, setSelectedTabIdx] = useState(0);

	const selectedTabList = [<ProfileTab />, <PasswordTab />, <WithdrawalTab />];

	// useEffect(() => {
	// 	window.scrollTo({ top: 0 });
	// }, [selectedTabIdx]);

	return (
		<>
			<ContainerDiv>
				<TabsAside>
					<TabsUl>
						<TabLi
							role="tab"
							aria-label="profileTab"
							isSelected={selectedTabIdx === 0}
							onClick={() => setSelectedTabIdx(0)}
						>
							프로필
						</TabLi>
						<TabLi
							role="tab"
							aria-label="passwordTab"
							isSelected={selectedTabIdx === 1}
							onClick={() => setSelectedTabIdx(1)}
						>
							비밀번호
						</TabLi>
						<TabLi
							role="tab"
							aria-label="withdrawalTab"
							isSelected={selectedTabIdx === 2}
							onClick={() => setSelectedTabIdx(2)}
						>
							회원 탈퇴
						</TabLi>
					</TabsUl>
				</TabsAside>
				<MainSection>{selectedTabList[selectedTabIdx]}</MainSection>
			</ContainerDiv>
			{openedModal === UI_TYPE.DELETE_GROUP && (
				<GroupDeleteModal groupInfo={groupInfo} isLoading={isLoading} />
			)}
			{openedModal === UI_TYPE.DELEGATE_GROUP && (
				<GroupDelegateModal groupInfo={groupInfo} isGroupLoading={isLoading} />
			)}
			{openedModal === UI_TYPE.LEAVE_GROUP && (
				<GroupLeaveModal groupInfo={groupInfo} isGroupLoading={isLoading} />
			)}
		</>
	);
};
export default SettingPage;
