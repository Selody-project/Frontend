import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@/assets/icon/ic-group-add.svg";
import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { getGroupInfoDetail } from "@/features/group/group-service";

import {
	ContainerDiv,
	TopDiv,
	MiddleDiv,
	MiddleInnerDiv,
	BottomDiv,
} from "./GroupProfile.styles";

const GroupProfile = () => {
	const inGroup = true;
	const dispatchFn = useDispatch();

	const group = useSelector((state) => state.group.group);
	// const groupList = useSelector((state) => state.group.groupList);

	useEffect(() => {
		// dispatchFn(
		// 	createGroup({
		// 		name: "testGroup112131",
		// 		description: "그룹 description 테스트123123",
		// 	}),
		// );
		// dispatchFn(getGroupList(2));
		dispatchFn(getGroupInfoDetail(2));
	}, []);

	// console.log(groupList);
	// console.log(group);

	return (
		<ContainerDiv>
			<TopDiv>
				<img src={SampleImg} alt="sampleimg" />
				<h3>{group?.name}</h3>
				<p>
					당신의 개발 열정을 키우고 함께
					<br />
					성장할 수 있는 공간, CodeCrafters
				</p>
			</TopDiv>
			<MiddleDiv>
				<MiddleInnerDiv>
					<h3>{group?.member}</h3>
					<h4>그룹원</h4>
				</MiddleInnerDiv>
				<MiddleInnerDiv>
					<h3>{group?.feed}</h3>
					<h4>작성된 피드</h4>
				</MiddleInnerDiv>
			</MiddleDiv>
			<BottomDiv>
				<button type="button">
					{inGroup ? (
						"그룹 나가기"
					) : (
						<>
							<AddIcon />
							그룹 참여 요청
						</>
					)}
				</button>
			</BottomDiv>
		</ContainerDiv>
	);
};

export default GroupProfile;
