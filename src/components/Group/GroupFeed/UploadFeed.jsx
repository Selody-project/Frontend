import React from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	UploadSection,
	TopDiv,
	UploadTextarea,
	UploadButton,
} from "./UploadFeed.styles";

const UploadFeed = () => (
	<UploadSection>
		<TopDiv>
			<img src={SampleImg} alt="sampleimg" />
			<UploadTextarea placeholder="그룹에 공유하고 싶은 글을 작성하여 올려보세요." />
		</TopDiv>
		<UploadButton>업로드</UploadButton>
	</UploadSection>
);

export default UploadFeed;
