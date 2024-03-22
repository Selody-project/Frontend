import React from "react";
import { useSelector } from "react-redux";

import {
	UploadSection,
	TopDiv,
	UploadTextarea,
	UploadButton,
} from "./UploadFeed.styles";

const UploadFeed = () => {
	const { user } = useSelector((state) => state.auth);

	return (
		<UploadSection>
			<TopDiv>
				<img src={user.profileImg} alt="profileImg" />
				<UploadTextarea placeholder="그룹에 공유하고 싶은 글을 작성하여 올려보세요." />
			</TopDiv>
			<UploadButton>업로드</UploadButton>
		</UploadSection>
	);
};

export default UploadFeed;
