import React, { forwardRef } from "react";

import Feed from "@/components/Common/Feed/Feed";

import { FeedSection } from "./MyGroupFeed.styles";

const MyGroupFeed = forwardRef(({ myGroupPosts }, ref) => {
	return (
		<FeedSection>
			{myGroupPosts &&
				myGroupPosts.map((post) => (
					<Feed post={post} key={post.postId} groupId={post.groupId} />
				))}
			<div ref={ref} />
		</FeedSection>
	);
});

export default MyGroupFeed;
