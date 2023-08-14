import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { getGroupList } from "@/features/group/group-service";

import {
	FeedMainContainer,
	FeedMainHeader,
	MyGroupListContainer,
	GroupAvatarContainer,
	AllGroupListContainer,
	GroupPaperContainer,
} from "./FeedMain.styles";
import FeedDetail from "../FeedDetail";

const FeedMain = () => {
	const dispatch = useDispatch();
	const groupList = useSelector((state) => state.group);

	const [selectedGroup, setSelectedGroup] = useState(null);

	useEffect(() => {
		dispatch(getGroupList());
	}, []);

	const handleGroupClick = (group) => {
		setSelectedGroup(group);
	};

	if (selectedGroup !== null) {
		return <FeedDetail groupInfo={selectedGroup} />;
	}

	return (
		<FeedMainContainer>
			<FeedMainHeader>내 그룹</FeedMainHeader>
			<MyGroupListContainer>
				{groupList.groupList.map((group) => {
					return (
						<GroupAvatarContainer key={group.groupId}>
							<Avatar
								sx={{ width: 50, height: 50 }}
								onClick={() => handleGroupClick(group)}
							>
								{group.name[0]}
							</Avatar>
							<span>{group.name}</span>
						</GroupAvatarContainer>
					);
				})}
			</MyGroupListContainer>

			<FeedMainHeader>전체 그룹</FeedMainHeader>
			<AllGroupListContainer>
				{groupList.groupList.map((group) => (
					<GroupPaperContainer
						key={group.groupId}
						onClick={() => handleGroupClick(group)}
					>
						<Paper elevation={3} sx={{ padding: "16px", textAlign: "center" }}>
							<Avatar sx={{ width: 50, height: 50, margin: "auto" }}>
								{group.name[0]}
							</Avatar>
							<Typography variant="h6" component="div">
								{group.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								멤버 수: {group.member}
							</Typography>
						</Paper>
					</GroupPaperContainer>
				))}
			</AllGroupListContainer>
		</FeedMainContainer>
	);
};

export default FeedMain;
