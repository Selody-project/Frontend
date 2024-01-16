import React from "react";

// import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import Editor from "./Editor";
import {
	// UploadSection,
	// TopDiv,
	// UploadTextarea,
	// UploadButton,
	UploadDiv,
} from "./UploadFeed.styles";

const UploadFeed = () => (
	// <UploadSection>
	// 	<TopDiv>
	// 		<img src={SampleImg} alt="sampleimg" />
	// 		<UploadTextarea placeholder="그룹에 공유하고 싶은 글을 작성하여 올려보세요." />
	// 	</TopDiv>
	// 	<UploadButton>업로드</UploadButton>
	// </UploadSection>
	<UploadDiv>
		<Editor />
	</UploadDiv>
);

export default UploadFeed;
