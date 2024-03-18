import React from "react";

import { EmptyFeedIcon } from "@/constants/iconConstants";

import { LayoutDiv } from "./EmptyFeed.styles";

const EmptyFeed = ({ isCommunity }) => {
	return (
		<LayoutDiv isCommunity={isCommunity}>
			<EmptyFeedIcon />
			<h3>게시된 글이 없어요.</h3>
			<h4>첫 게시글의 주인공이 되어보세요!</h4>
		</LayoutDiv>
	);
};

export default EmptyFeed;
