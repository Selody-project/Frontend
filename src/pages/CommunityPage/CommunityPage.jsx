import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GroupSearch from "@/components/Group/GroupSearch/GroupSearch";
import MyGroup from "@/components/Group/MyGroup/MyGroup";
import MyGroupFeed from "@/components/Group/MyGroupFeed/MyGroupFeed";
import { SearchIcon } from "@/constants/iconConstants";
import { TAB_CONSTANTS_TITLE } from "@/constants/tabConstants";
import { searchGroup } from "@/features/group/group-service";

import {
	ContainerDiv,
	FeedDiv,
	FeedTitleDiv,
	SearchDiv,
	Input,
	SearchButton,
	TabUl,
	TabButton,
} from "./CommunityPage.styles";

const CommunityPage = () => {
	const [tabName, setTabName] = useState(TAB_CONSTANTS_TITLE.MY_GROUP_FEED);

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
					<TabUl role="tablist">
						<li role="tab">
							<TabButton
								isActive={tabName === TAB_CONSTANTS_TITLE.MY_GROUP_FEED}
								onClick={() => setTabName(TAB_CONSTANTS_TITLE.MY_GROUP_FEED)}
							>
								{TAB_CONSTANTS_TITLE.MY_GROUP_FEED}
							</TabButton>
						</li>
						<li role="tab">
							<TabButton
								isActive={tabName === TAB_CONSTANTS_TITLE.GROUP_SEARCH}
								onClick={() => setTabName(TAB_CONSTANTS_TITLE.GROUP_SEARCH)}
							>
								{TAB_CONSTANTS_TITLE.GROUP_SEARCH}
							</TabButton>
						</li>
					</TabUl>

					{tabName === TAB_CONSTANTS_TITLE.GROUP_SEARCH && (
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
					)}
				</FeedTitleDiv>

				{tabName === TAB_CONSTANTS_TITLE.GROUP_SEARCH ? (
					<GroupSearch onSearch={onSearch} searchGroupList={searchGroupList} />
				) : (
					<MyGroupFeed />
				)}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default CommunityPage;
