import React from "react";

import {
	EmptySearchResultIcon,
	EmptyFeedIcon,
	EmptyGroupListIcon,
} from "@/constants/iconConstants";

export const EMPTY_TYPE = {
	SEARCH_RESULT: "SEARCH_RESULT",
	GROUP_FEED: "GROUP_FEED",
	MY_GROUP_FEED: "MY_GROUP_FEED",
	MY_GROUP: "MY_GROUP",
	REQUEST_GROUP: "REQUEST_GROUP",
};

export const EMPTY_DATA = [
	{
		type: "SEARCH_RESULT",
		icon: <EmptySearchResultIcon />,
		text: "검색 결과가 없습니다.",
		subText: "입력하신 검색어를 확인해주세요",
	},
	{
		type: "GROUP_FEED",
		icon: <EmptyFeedIcon />,
		text: "게시된 글이 없어요",
		subText: "첫 게시글의 주인공이 되어보세요!",
	},
	{
		type: "MY_GROUP_FEED",
		icon: <EmptyFeedIcon />,
		text: "그룹에서 등록된 피드가 없습니다.",
		subText: "피드를 등록해보세요",
	},
	{
		type: "MY_GROUP",
		icon: <EmptyGroupListIcon />,
		text: "가입된 그룹이 없습니다.",
		subText: "그룹을 만들거나 신청해 보세요.",
	},
	{
		type: "REQUEST_GROUP",
		icon: <EmptyGroupListIcon />,
		text: "요청 중인 그룹이 없습니다.",
		subText: "그룹 신청하기를 통해 그룹에 가입해 보세요.",
	},
];
