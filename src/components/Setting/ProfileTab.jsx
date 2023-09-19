import React from "react";

import GroupScheduleSetting from "./GroupScheduleSetting/GroupScheduleSetting";
import UserInfo from "./UserInfo/UserInfo";

const ProfileTab = () => {
	return (
		<>
			<UserInfo />
			<GroupScheduleSetting />
		</>
	);
};

export default ProfileTab;
