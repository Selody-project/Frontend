import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import GroupSearch from "@/components/Group/GroupSearch/GroupSearch";
import MyGroup from "@/components/Group/MyGroup/MyGroup";
import MyGroupFeed from "@/components/Group/MyGroupFeed/MyGroupFeed";
import { SearchIcon } from "@/constants/iconConstants";
import { TAB_CONSTANTS_TITLE } from "@/constants/tabConstants";
import { searchGroup } from "@/features/group/group-service";
import { getMyGroupPosts } from "@/features/post/post-service";
import useObserver from "@/hooks/useObserver";

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
	const dispatch = useDispatch();

	const { searchGroupList, searchLastRecordId } = useSelector(
		(state) => state.group,
	);
	const { myGroupPosts, myGroupPostslastRecordId, isEnd } = useSelector(
		(state) => state.post,
	);

	const [tabName, setTabName] = useState(TAB_CONSTANTS_TITLE.MY_GROUP_FEED);

	const [searchKeyword, setSearchKeyword] = useState("");
	const [onSearch, setOnSearch] = useState(false);

	const postRef = useRef(null);

	const isObserving = useObserver(postRef, { threshold: 0.3 });

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

	useEffect(() => {
		const dispatchGetMyGroupPosts = async () => {
			await dispatch(getMyGroupPosts(myGroupPostslastRecordId));
		};
		if (isObserving && !isEnd) {
			dispatchGetMyGroupPosts();
		}
	}, [isObserving, dispatch]);

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
					<MyGroupFeed myGroupPosts={myGroupPosts} ref={postRef} />
				)}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default CommunityPage;
