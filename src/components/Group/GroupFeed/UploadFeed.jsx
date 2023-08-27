import React from "react";

import {
	ContainerDiv,
	TopDiv,
	ProfileDiv,
	UploadTextarea,
	UploadButton,
} from "./UploadFeed.styles";

const UploadFeed = () => {
	return (
		<ContainerDiv>
			<TopDiv>
				<ProfileDiv />
				<UploadTextarea placeholder="그룹에 공유하고 싶은 글을 작성하여 올려보세요." />
			</TopDiv>
			<UploadButton>업로드</UploadButton>
		</ContainerDiv>
	);
};

export default UploadFeed;
