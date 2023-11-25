import React, { useState } from "react";

import PasswordTab from "@/components/Setting/PasswordTab/PasswordTab";
import ProfileTab from "@/components/Setting/ProfileTab";
import WithdrawalTab from "@/components/Setting/WithdrawalTab/WithdrawalTab";

import {
	ContainerDiv,
	MainSection,
	TabDiv,
	TabsAside,
	TabsDiv,
} from "./SettingPage.style";

const SettingPage = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const selectedTabList = [<ProfileTab />, <PasswordTab />, <WithdrawalTab />];

	return (
		<ContainerDiv>
			<TabsAside>
				<TabsDiv>
					<TabDiv
						data-testid="profileTab"
						isSelected={selectedTab === 0}
						onClick={() => setSelectedTab(0)}
					>
						프로필
					</TabDiv>
					<TabDiv
						data-testid="passwordTab"
						isSelected={selectedTab === 1}
						onClick={() => setSelectedTab(1)}
					>
						비밀번호
					</TabDiv>
					<TabDiv
						data-testid="withdrawalTab"
						isSelected={selectedTab === 2}
						onClick={() => setSelectedTab(2)}
					>
						회원 탈퇴
					</TabDiv>
				</TabsDiv>
			</TabsAside>
			<MainSection>{selectedTabList[selectedTab]}</MainSection>
		</ContainerDiv>
	);
};

export default SettingPage;
