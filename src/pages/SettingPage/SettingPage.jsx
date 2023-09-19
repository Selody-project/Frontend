import React, { useState } from "react";

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
						data-testid="withdrawalTab"
						isSelected={selectedTab === 1}
						onClick={() => setSelectedTab(1)}
					>
						회원 탈퇴
					</TabDiv>
				</TabsDiv>
			</TabsAside>
			<MainSection>
				{selectedTab === 0 ? (
					<>
						<h1>설정</h1>
						<ProfileTab />
					</>
				) : (
					<>
						<h1>회원 탈퇴</h1>
						<WithdrawalTab />
					</>
				)}
			</MainSection>
		</ContainerDiv>
	);
};

export default SettingPage;
