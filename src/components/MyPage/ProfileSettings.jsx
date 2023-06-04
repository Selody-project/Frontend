import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
	UserInfoContainer,
	UserInfoSection,
	UserInfoItem,
	ChangeButton,
	Label,
	InputField,
	ImageContainer,
	ImagePreview,
	ImageInput,
} from "../../pages/MyPage.styles";

const ProfileSettings = () => {
	const { nickname, email, imageUrl } = useSelector(
		(state) => state.user.myPageInfo,
	);

	const [newNickname, setNewNickname] = useState(nickname);
	const [newImage, setNewImage] = useState(imageUrl);

	const handleNicknameChange = (e) => {
		setNewNickname(e.target.value);
	};

	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setNewImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	const handleImageSubmit = (e) => {
		e.preventDefault();
		// Image upload logic here
	};

	const handleNicknameSubmit = (e) => {
		e.preventDefault();
		// Nickname update logic here
	};

	return (
		<UserInfoContainer>
			<UserInfoSection>
				<UserInfoItem>
					<ImageContainer>
						<Label htmlFor="image" style={{ marginRight: "20px" }}>
							프로필 이미지
						</Label>
						<ImagePreview src={newImage} alt="profile" />
						<ChangeButton onClick={handleImageSubmit} disabled={!newImage}>
							저장
						</ChangeButton>
					</ImageContainer>
					<ImageInput
						type="file"
						id="image"
						name="image"
						onChange={handleImageChange}
					/>
				</UserInfoItem>
				<hr />
				<UserInfoItem>
					<div>
						<Label htmlFor="nickname">닉네임</Label>
						<InputField
							id="nickname"
							type="text"
							value={newNickname}
							onChange={handleNicknameChange}
						/>
						<ChangeButton
							onClick={handleNicknameSubmit}
							disabled={newNickname === nickname}
						>
							저장
						</ChangeButton>
					</div>
					<hr />
					<div>
						<Label htmlFor="email">이메일</Label>
						<InputField id="email" type="email" defaultValue={email} disabled />
					</div>
				</UserInfoItem>
				<hr />
			</UserInfoSection>
		</UserInfoContainer>
	);
};

export default ProfileSettings;
