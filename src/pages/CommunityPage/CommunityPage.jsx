import React, { useState } from "react";

import SearchIcon from "@/assets/icon/ic-search.svg";
import GroupSearch from "@/components/Community/GroupSearch/GroupSearch";
import MyGroup from "@/components/Community/MyGroup/MyGroup";
import MyGroupFeed from "@/components/Community/MyGroupFeed/MyGroupFeed";

import {
	ContainerDiv,
	FeedDiv,
	FeddTitleDiv,
	Button,
	SearchDiv,
	Input,
} from "./CommunityPage.styles";

const CommunityPage = () => {
	const [tab, setTab] = useState("feed");

	return (
		<ContainerDiv>
			<MyGroup />
			<FeedDiv>
				<FeddTitleDiv>
					<ul>
						<li>
							<Button
								type="button"
								onClick={() => setTab("feed")}
								disabled={tab === "feed"}
							>
								내 그룹 피드
							</Button>
						</li>
						<li>
							<Button
								type="button"
								onClick={() => setTab("group")}
								disabled={tab === "group"}
							>
								그룹 검색
							</Button>
						</li>
					</ul>
					<SearchDiv>
						<Input
							type="text"
							name="search"
							placeholder="다른 그룹을 탐색해보세요."
						/>
						<SearchIcon />
					</SearchDiv>
				</FeddTitleDiv>

				{tab === "feed" ? <MyGroupFeed /> : <GroupSearch />}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default CommunityPage;
