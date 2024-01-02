import React, { forwardRef } from "react";

import Feed from "@/components/Common/Feed/Feed";

import { FeedSection } from "./GroupFeed.styles";

const GroupFeed = forwardRef(({ groupId, groupPosts }, ref) => {
	return (
		<FeedSection>
			{groupPosts &&
				groupPosts.map((post) => (
					<Feed post={post} key={post.postId} groupId={groupId} />
				))}
			<div ref={ref} />
		</FeedSection>
	);
});

export default GroupFeed;
