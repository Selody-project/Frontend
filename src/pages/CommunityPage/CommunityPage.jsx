import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@/assets/icon/ic-search.svg";
import GroupSearch from "@/components/Community/GroupSearch/GroupSearch";
import MyGroup from "@/components/Community/MyGroup/MyGroup";
import MyGroupFeed from "@/components/Community/MyGroupFeed/MyGroupFeed";
import { searchGroup } from "@/features/group/group-service";

import {
	ContainerDiv,
	FeedDiv,
	FeddTitleDiv,
	TabButton,
	SearchDiv,
	Input,
	SearchButton,
} from "./CommunityPage.styles";

const CommunityPage = () => {
	const [tab, setTab] = useState("feed");
	const [searchKeyword, setSearchKeyword] = useState("");

	const [onSearch, setOnSearch] = useState(false);

	const dispatch = useDispatch();

	const searchGroupList = useSelector((state) => state.group.searchGroupList);

	const handleSearchInput = (e) => {
		setSearchKeyword(e.target.value);

		if (searchKeyword.length <= 1) {
			setOnSearch(false);
		}
	};

	const handleSearchClick = (event) => {
		event.preventDefault();
		dispatch(searchGroup(searchKeyword));
		setOnSearch(true);
	};

	return (
		<ContainerDiv>
			<MyGroup />
			<FeedDiv>
				<FeddTitleDiv>
					<ul>
						<li>
							<TabButton
								type="button"
								onClick={() => setTab("feed")}
								disabled={tab === "feed"}
							>
								내 그룹 피드
							</TabButton>
						</li>
						<li>
							<TabButton
								type="button"
								onClick={() => setTab("group")}
								disabled={tab === "group"}
							>
								그룹 검색
							</TabButton>
						</li>
					</ul>
					<SearchDiv>
						<Input
							placeholder="다른 그룹을 탐색해보세요."
							onChange={handleSearchInput}
						/>
						<SearchButton onClick={handleSearchClick}>
							<SearchIcon />
						</SearchButton>
					</SearchDiv>
				</FeddTitleDiv>

				{tab === "feed" ? (
					<MyGroupFeed />
				) : (
					<GroupSearch onSearch={onSearch} searchGroupList={searchGroupList} />
				)}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default CommunityPage;
