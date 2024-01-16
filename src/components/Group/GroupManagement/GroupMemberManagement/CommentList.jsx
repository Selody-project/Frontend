import React from "react";

import { CommentListIcon } from "@/constants/iconConstants";

import { ContainerDiv, TitleDiv, ContentDiv } from "./CommentList.styles";

const mockItems = [
	{
		name: "홍길동",
		date: "2023.10.17",
		content:
			"오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은 시간이였어",
	},
	{
		name: "홍길동2",
		date: "2023.10.17",
		content:
			"오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은 시간이였어",
	},
	{
		name: "홍길동3",
		date: "2023.10.17",
		content:
			"오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은 시간이였어",
	},
	{
		name: "홍길동4",
		date: "2023.10.17",
		content:
			"오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은 시간이였어",
	},
	{
		name: "홍길동5",
		date: "2023.10.17",
		content:
			"오늘은 개발 스터디 그룹에서 알고리즘 대회에 참여했어. 좋은 시간이였어",
	},
];

const CommentList = () => {
	return (
		<ContainerDiv>
			<CommentListIcon />
			<ul>
				{mockItems.map((data) => (
					<li key={data.name}>
						<TitleDiv>
							<h3>{data.name}</h3>
							<span>{data.date}</span>
						</TitleDiv>
						<ContentDiv>{data.content}</ContentDiv>
					</li>
				))}
			</ul>
		</ContainerDiv>
	);
};

export default CommentList;
