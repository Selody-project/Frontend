import React, { useState } from "react";

import SettingTab from "@/components/Setting/SettingTab";
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
						data-testid="settingTab"
						isSelected={selectedTab === 0}
						onClick={() => setSelectedTab(0)}
					>
						설정
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
						<SettingTab />
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
