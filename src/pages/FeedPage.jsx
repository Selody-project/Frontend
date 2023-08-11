import React from "react";

import FeedMain from "@/components/FeedPage/FeedMain/FeedMain";
import FeedHeader from "@/components/Header/FeedHeader/FeedHeader";
import Header from "@/components/Header/Header/Header";

const FeedPage = () => {
	return (
		<>
			<Header />
			<FeedHeader />
			<FeedMain />
		</>
	);
};

export default FeedPage;
