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
	Button,
} from "./FeedLanding.styles";
import GroupSearch from "../GroupSearch/GroupSearch";
import MyGroupFeed from "../MyGroupFeed/MyGroupFeed";

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
						<h4>그룹 추가</h4>
					</ItemDiv>
					<ItemDiv>
						<CircleDiv>
							<img src={SampleImg} alt="sampleimg" />
						</CircleDiv>
						<h4>디자인 스터디</h4>
					</ItemDiv>
					<ItemDiv>
						<CircleDiv>
							<img src={SampleImg2} alt="sampleimg2" />
						</CircleDiv>
						<h4>음악 동아리</h4>
					</ItemDiv>
				</ListDiv>
			</GroupDiv>
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

export default FeedLanding;
