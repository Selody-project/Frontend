import React from "react";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";

import {
	ContainerDiv,
	TopDiv,
	UploadTextarea,
	UploadButton,
} from "./UploadFeed.styles";

const UploadFeed = () => (
	<ContainerDiv>
		<TopDiv>
			<img src={SampleImg} alt="sampleimg" />
			<UploadTextarea placeholder="그룹에 공유하고 싶은 글을 작성하여 올려보세요." />
		</TopDiv>
		<UploadButton>업로드</UploadButton>
	</ContainerDiv>
);

export default UploadFeed;
