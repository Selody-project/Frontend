import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Tab, Tabs, Container } from "@mui/material";

import PasswordUpdate from "../../components/Setting/PasswordUpdate";
import ProfileSettings from "../../components/Setting/ProfileSettings";
import SharedSettings from "../../components/Setting/SharedSettings";
import { getCurrentUser } from "../../features/auth/auth-service";

const SettingPage = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (typeof user !== "object") {
			dispatch(getCurrentUser());
		}
	}, []);

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	return (
		<Container>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					variant="fullWidth"
					value={selectedTab}
					onChange={handleChange}
					textColor="secondary"
					indicatorColor="secondary"
					sx={{ "& .MuiTab-root": { fontWeight: "bold" } }}
				>
					<Tab label="프로필 및 계정 관리" />
					<Tab label="공유일정 및 채팅관리" />
					<Tab label="비밀번호 변경" id="PasswordUpdate" />
				</Tabs>
			</Box>
			{selectedTab === 0 && <ProfileSettings userInfo={user} />}
			{selectedTab === 1 && <SharedSettings />}
			{selectedTab === 2 && <PasswordUpdate />}
		</Container>
	);
};

export default SettingPage;