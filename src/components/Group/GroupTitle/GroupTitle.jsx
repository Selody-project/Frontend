import React, { useState } from "react";

import { SORT_OPTION_TYPE } from "@/constants/groupFeedConstants";

import { TitleDiv, Button } from "./GroupTitle.styles";

const GroupTitle = () => {
	const [sortOption, setSortOption] = useState(SORT_OPTION_TYPE.LATEST);

	return (
		<TitleDiv>
			<h2>그룹 피드</h2>
			<ul>
				<li>
					<Button
						type="button"
						onClick={() => setSortOption(SORT_OPTION_TYPE.LATEST)}
						disabled={sortOption === SORT_OPTION_TYPE.LATEST}
					>
						최신순
					</Button>
				</li>
				<li>
					<Button
						type="button"
						onClick={() => setSortOption(SORT_OPTION_TYPE.BEST)}
						disabled={sortOption === SORT_OPTION_TYPE.BEST}
					>
						좋아요순
					</Button>
				</li>
			</ul>
		</TitleDiv>
	);
};

export default GroupTitle;
