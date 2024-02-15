import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import GroupSearch from "@/components/Group/GroupSearch/GroupSearch";
import MyGroup from "@/components/Group/MyGroup/MyGroup";
import MyGroupFeed from "@/components/Group/MyGroupFeed/MyGroupFeed";
import { SearchIcon } from "@/constants/iconConstants";
import {
	TAB_CONSTANTS_TITLE,
	TAB_KEY,
	TAB_PARAM,
} from "@/constants/tabConstants";
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

	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();

	const [searchKeyword, setSearchKeyword] = useState("");
	const [onSearch, setOnSearch] = useState(false);

	const postRef = useRef(null);

	const isObserving = useObserver(postRef, { threshold: 0.3 });

	const handleSearchInput = (e) => {
		setSearchKeyword(e.target.value.trim());
	};

	const handleSearchClick = () => {
		if (searchKeyword.length <= 1) {
			setOnSearch(false);
			toast.error("2글자 이상부터 검색 가능합니다.");
		} else {
			dispatch(
				searchGroup({
					keyword: searchKeyword,
					recordId: searchLastRecordId,
				}),
			);

			setOnSearch(true);
			setSearchKeyword("");
		}
	};

	const handleSearchKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearchClick();
		}
	};

	useEffect(() => {
		if (searchParams) {
			setSearchParams("tab=feed");
		}
	}, []);

	useEffect(() => {
		if (isObserving && !isEnd) {
			dispatch(getMyGroupPosts(myGroupPostslastRecordId));
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
								isActive={searchParams.get(TAB_KEY) === TAB_PARAM.MY_GROUP_FEED}
								onClick={() =>
									navigate(`/community?${TAB_KEY}=${TAB_PARAM.MY_GROUP_FEED}`)
								}
							>
								{TAB_CONSTANTS_TITLE.MY_GROUP_FEED}
							</TabButton>
						</li>
						<li role="tab">
							<TabButton
								isActive={searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH}
								onClick={() =>
									navigate(`/community?${TAB_KEY}=${TAB_PARAM.GROUP_SEARCH}`)
								}
							>
								{TAB_CONSTANTS_TITLE.GROUP_SEARCH}
							</TabButton>
						</li>
					</TabUl>

					{searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH && (
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

				{searchParams.get(TAB_KEY) === TAB_PARAM.GROUP_SEARCH ? (
					<GroupSearch onSearch={onSearch} searchGroupList={searchGroupList} />
				) : (
					<MyGroupFeed myGroupPosts={myGroupPosts} ref={postRef} />
				)}
			</FeedDiv>
		</ContainerDiv>
	);
};

export default CommunityPage;
