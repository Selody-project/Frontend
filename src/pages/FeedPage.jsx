import React from "react";
import Header from "@/components/Header/Header";
import FeedHeader from "@/components/Header/FeedHeader";
import FeedMain from "@/components/FeedPage/FeedMain";

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
