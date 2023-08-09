import React from "react";
import Header from "@/components/Header/Header/Header";
import FeedHeader from "@/components/Header/FeedHeader/FeedHeader";
import FeedMain from "@/components/FeedPage/FeedMain/FeedMain";

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
