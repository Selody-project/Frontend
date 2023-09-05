import React from "react";

// import FeedMain from "@/components/FeedPage/FeedMain/FeedMain";
// import FeedHeader from "@/components/Header/FeedHeader/FeedHeader";

import FeedLanding from "@/components/Feed/FeedLanding/FeedLanding";
import Header from "@/components/Header/Header/Header";

const FeedPage = () => {
	return (
		<>
			<Header />
			<FeedLanding />
			{/* <FeedHeader /> */}
			{/* <FeedMain /> */}
		</>
	);
};

export default FeedPage;
