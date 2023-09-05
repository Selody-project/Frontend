import React, { useState } from "react";

import Icon from "@/assets/icon/ic-group-add.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import SampleImg2 from "@/assets/img/feed/img-group-sample-02.jpeg";

import {
	ContainerDiv,
	GroupDiv,
	ListDiv,
	ItemDiv,
	CircleAddDiv,
	CircleDiv,
	FeedDiv,
	TabDiv,
	TabButton,
} from "./FeedLanding.styles";
// import GroupFeed from "../GroupFeed/GroupFeed";
import GroupFeed from "../GroupFeed/GroupFeed";
import GroupSearch from "../GroupSearch/GroupSearch";

const FeedLanding = () => {
	const [tab, setTab] = useState("feed");

	return (
		<ContainerDiv>
			<GroupDiv>
				<h3>내 그룹</h3>
				<ListDiv>
					<ItemDiv>
						<CircleAddDiv>
							<Icon />
						</CircleAddDiv>
						<h3>그룹 추가</h3>
					</ItemDiv>
					<ItemDiv>
						<CircleDiv>
							<img src={SampleImg} alt="sampleimg" />
						</CircleDiv>
						<h3>디자인 스터디</h3>
					</ItemDiv>
					<ItemDiv>
						<CircleDiv>
							<img src={SampleImg2} alt="sampleimg2" />
						</CircleDiv>
						<h3>음악 동아리</h3>
					</ItemDiv>
				</ListDiv>
			</GroupDiv>
			<FeedDiv>
				<TabDiv>
					<TabButton
						type="button"
						onClick={() => setTab("feed")}
						disabled={tab === "feed"}
					>
						내 그룹 피드
					</TabButton>
					<TabButton
						type="button"
						onClick={() => setTab("group")}
						disabled={tab === "group"}
					>
						그룹 검색
					</TabButton>
				</TabDiv>
				{tab === "feed" ? <GroupFeed /> : <GroupSearch />}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default FeedLanding;
