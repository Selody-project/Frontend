import React, { useState, forwardRef } from "react";

import Feed from "@/components/Common/Feed/Feed";

import { FeedSection } from "./GroupFeed.styles";

const GroupFeed = forwardRef(({ groupId, groupPosts }, ref) => {
	const [optionMenuOpenedFeedIndex, setOptionMenuOpenedFeedIndex] =
		useState(null);

	return (
		<FeedSection>
			{groupPosts &&
				groupPosts.map((post) => (
					<Feed
						post={post}
						key={post.postId}
						groupId={groupId}
						optionOpenedFeedIndex={optionMenuOpenedFeedIndex}
						onThreeDotClick={(postId) => setOptionMenuOpenedFeedIndex(postId)}
					/>
				))}
			<div ref={ref} />
		</FeedSection>
	);
});

export default GroupFeed;
