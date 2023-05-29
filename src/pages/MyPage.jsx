import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { getCurrentUser } from "../store/user/user-slice";
import ProfileSettings from "../components/MyPage/ProfileSettings";
import SharedSettings from "../components/MyPage/SharedSettings";
import { MyPageContainer, TabsContainer, Tab } from "./MyPage.styles";

const MyPage = () => {
	const [selectedTab, setSelectedTab] = useState("profile");
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(user);
		if (user.message) {
			dispatch(getCurrentUser());
		}
	}, [dispatch, user]);

	return (
		<>
			<Header />
			<MyPageContainer>
				<TabsContainer>
					<h1>설정</h1>
					<Tab
						selected={selectedTab === "profile"}
						onClick={() => setSelectedTab("profile")}
					>
						프로필 및 계정 관리
					</Tab>
					<Tab
						selected={selectedTab === "shared"}
						onClick={() => setSelectedTab("shared")}
					>
						공유일정 및 채팅관리
					</Tab>
				</TabsContainer>
				{selectedTab === "profile" && <ProfileSettings />}
				{selectedTab === "shared" && <SharedSettings />}
			</MyPageContainer>
		</>
	);
};

export default MyPage;
