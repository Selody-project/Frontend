import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

import DefaultProfile from "@/assets/img/img-selody-logo/3x.png";

import {
	ContainerDiv,
	InnerDiv,
	TitleButton,
	InfoDiv,
} from "./GroupManagement.styles";

const GroupManagement = () => {
	// const dispatch = useDispatch();

	// const groupInfo = useSelector(
	// 	(state) => state.group.groupInfo?.information.group,
	// );

	// const { name, description, image, isPublicGroup } = groupInfo;
	// const defaultProfileImg = image ?? DefaultProfile;

	const [menu, setMenu] = useState("그룹 프로필");

	// const [newName, setNewName] = useState(name);
	// const [newDescription, setNewDescription] = useState(description);
	// const [newProfileImg, setNewProfileImg] = useState(image);
	// const [newIsPublicGroup, setNewIsPublicGroup] = useState(isPublicGroup);

	// const handleChangeImg = (e) => {
	// 	const file = e.target.files[0];
	// 	const reader = new FileReader();

	// 	reader.readAsDataURL(file);
	// 	reader.onloadend = () => {};
	// };

	// console.log(name, description, image, isPublicGroup);

	return (
		<ContainerDiv>
			<InnerDiv>
				<ul>
					<li>
						<TitleButton
							onClick={() => setMenu("그룹 프로필")}
							disabled={menu === "그룹 프로필"}
						>
							그룹 프로필
						</TitleButton>
					</li>
					<li>
						<TitleButton
							onClick={() => setMenu("그룹원 관리")}
							disabled={menu === "그룹원 관리"}
						>
							그룹원 관리
						</TitleButton>
					</li>
				</ul>
				<InfoDiv>
					<h3>프로필</h3>
					<img src={DefaultProfile} alt="DefaultProfile" />
					<label htmlFor="profileImg">이미지 재선택</label>
					<input type="file" id="profileImg" />
				</InfoDiv>
			</InnerDiv>
		</ContainerDiv>
	);
};

export default GroupManagement;
