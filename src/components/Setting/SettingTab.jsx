import React from "react";

import GroupScheduleSetting from "./GroupScheduleSetting/GroupScheduleSetting";
import UserInfo from "./UserInfo/UserInfo";

const SettingTab = () => {
	return (
		<>
			<UserInfo />
			<GroupScheduleSetting />
		</>
	);
};

export default SettingTab;
