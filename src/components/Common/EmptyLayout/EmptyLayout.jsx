import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { EMPTY_TYPE } from "@/constants/emptyConstants";
import {
	EmptyFeedIcon,
	EmptyGroupListIcon,
	EmptySearchResultIcon,
} from "@/constants/iconConstants";
import { openCreateGroupModal } from "@/features/ui/ui-slice";

import { LayoutDiv, ButtonDiv } from "./EmptyLayout.style";

const EMPTY_DATA = {
	[EMPTY_TYPE.SEARCH_RESULT]: {
		icon: <EmptySearchResultIcon />,
		text: "검색 결과가 없습니다.",
		subText: "입력하신 검색어를 확인해주세요",
	},
	[EMPTY_TYPE.GROUP_FEED]: {
		icon: <EmptyFeedIcon />,
		text: "게시된 글이 없어요",
		subText: "첫 게시글의 주인공이 되어보세요!",
	},
	[EMPTY_TYPE.MY_GROUP_FEED]: {
		icon: <EmptyFeedIcon />,
		text: "그룹에서 등록된 피드가 없습니다.",
		subText: "피드를 등록해보세요",
	},
	[EMPTY_TYPE.MY_GROUP]: {
		icon: <EmptyGroupListIcon />,
		text: "가입된 그룹이 없습니다.",
		subText: "그룹을 만들거나 신청해 보세요.",
	},
	[EMPTY_TYPE.REQUEST_GROUP]: {
		icon: <EmptyGroupListIcon />,
		text: "요청 중인 그룹이 없습니다.",
		subText: "그룹 신청하기를 통해 그룹에 가입해 보세요.",
	},
};

const EmptyLayout = ({ emptyType }) => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const contentData = EMPTY_DATA[emptyType];

	return (
		<LayoutDiv
			hasMargin={
				emptyType === EMPTY_TYPE.MY_GROUP ||
				emptyType === EMPTY_TYPE.REQUEST_GROUP
			}
		>
			{contentData.icon}
			<h3>{contentData.text}</h3>
			<h4>{contentData.subText}</h4>

			{(emptyType === EMPTY_TYPE.REQUEST_GROUP ||
				emptyType === EMPTY_TYPE.MY_GROUP) && (
				<ButtonDiv>
					{emptyType === EMPTY_TYPE.REQUEST_GROUP && (
						<button
							type="button"
							className="addButton"
							onClick={() => dispatch(openCreateGroupModal())}
						>
							그룹 만들기
						</button>
					)}

					<button
						type="button"
						onClick={() => navigate("/community?tab=search")}
					>
						그룹 신청하기
					</button>
				</ButtonDiv>
			)}
		</LayoutDiv>
	);
};

export default EmptyLayout;
