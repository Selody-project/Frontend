export const HEADER_TAB_CONSTANTS = [
	{
		id: "schedule",
		title: "일정",
		link: "/personal",
		link2: "/share",
		subHeader: [
			{
				id: "personal",
				title: "개인일정",
				link: "/personal",
			},
			{
				id: "share",
				title: "공유일정",
				link: "/share",
			},
		],
	},
	{
		id: "feed",
		title: "FEED IN SELODY",
		link: "/community?tab=feed",
		link2: "/mypage?tab=group",
		subHeader: [
			{
				id: "community",
				title: "홈",
				link: "/community?tab=feed",
			},
			{
				id: "mypage",
				title: "마이페이지",
				link: "/mypage?tab=group",
			},
		],
	},
];

export const TAB_KEY = "tab";

export const TAB_PARAM = {
	MY_GROUP_FEED: "feed",
	GROUP_SEARCH: "search",
	MY_GROUP: "group",
	REQUEST_GROUP: "request",
};

export const TAB_CONSTANTS_TITLE = {
	MY_GROUP_FEED: "내 그룹 피드",
	GROUP_SEARCH: "그룹 검색",
	MY_GROUP: "내 그룹",
	REQUEST_GROUP: "내가 요청중인 그룹",
};
