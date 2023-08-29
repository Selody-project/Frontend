import React, { useState } from "react";

import { ContainerDiv, FeedDiv, Button } from "./CommunityLanding.styles";
import GroupSearch from "../GroupSearch/GroupSearch";
import MyGroup from "../MyGroup/MyGroup";
import MyGroupFeed from "../MyGroupFeed/MyGroupFeed";

const CommunityLanding = () => {
	const [tab, setTab] = useState("feed");

	return (
		<ContainerDiv>
			<MyGroup />
			<FeedDiv>
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
				{tab === "feed" ? <MyGroupFeed /> : <GroupSearch />}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default CommunityLanding;
