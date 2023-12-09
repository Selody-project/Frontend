import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GroupSearch from "@/components/Group/GroupSearch/GroupSearch";
import MyGroup from "@/components/Group/MyGroup/MyGroup";
import MyGroupFeed from "@/components/Group/MyGroupFeed/MyGroupFeed";
import Tab from "@/components/Tab/Tab";
import { SearchIcon } from "@/constants/iconConstants";
import { TAB_OPTION_TYPE, TAB_OPTION_TITLE } from "@/constants/tabConstants";
import { searchGroup } from "@/features/group/group-service";

import {
	ContainerDiv,
	FeedDiv,
	FeedTitleDiv,
	SearchDiv,
	Input,
	SearchButton,
} from "./CommunityPage.styles";

const CommunityPage = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [searchKeyword, setSearchKeyword] = useState("");
	const [onSearch, setOnSearch] = useState(false);

	const dispatch = useDispatch();

	const searchGroupList = useSelector((state) => state.group.searchGroupList);

	const searchLastRecordId = useSelector(
		(state) => state.group.searchLastRecordId,
	);

	const handleSearchInput = (e) => {
		setSearchKeyword(e.target.value);

		if (searchKeyword.length <= 1) {
			setOnSearch(false);
		}
	};

	const handleSearchClick = () => {
		dispatch(
			searchGroup({ keyword: searchKeyword, recordId: searchLastRecordId }),
		);
		setOnSearch(true);
	};

	const handleSearchKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearchClick();
		}
	};

	return (
		<ContainerDiv>
			<MyGroup />
			<FeedDiv>
				<FeedTitleDiv>
					<Tab
						defaultOption={TAB_OPTION_TYPE.MY_GROUP_FEED}
						tabOption={TAB_OPTION_TYPE.GROUP_SEARCH}
						defaultTitle={TAB_OPTION_TITLE.MY_GROUP_FEED}
						tabTitle={TAB_OPTION_TITLE.GROUP_SEARCH}
						tabIndex={tabIndex}
						setTabIndex={setTabIndex}
					/>
					<SearchDiv>
						<Input
							placeholder="다른 그룹을 탐색해보세요."
							onChange={handleSearchInput}
							onKeyDown={handleSearchKeyDown}
						/>
						<SearchButton onClick={handleSearchClick}>
							<SearchIcon />
						</SearchButton>
					</SearchDiv>
				</FeedTitleDiv>

				{tabIndex ? (
					<GroupSearch onSearch={onSearch} searchGroupList={searchGroupList} />
				) : (
					<MyGroupFeed />
				)}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default CommunityPage;
