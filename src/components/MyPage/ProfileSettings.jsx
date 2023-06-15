import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { updateUserProfile } from "@/features/user/user-service";

const ProfileSettings = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { nickname, email, imageUrl, provider } = useSelector(
		(state) => state.user.user,
	);
	const [newNickname, setNewNickname] = useState(nickname);
	const [newImage, setNewImage] = useState(imageUrl);

	useEffect(() => {
		if (provider === "google" || provider === "naver") {
			document.getElementById("PasswordUpdate").style.display = "none";
			document.querySelectorAll("#changeBtn").forEach((btn) => {
				btn.style.display = "none";
			});
		}
	}, []);

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

		dispatch(updateUserProfile({ nickname: newNickname }));
		navigate("/mypage");
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
						<ChangeButton
							id="changeBtn"
							onClick={handleImageSubmit}
							disabled={!newImage}
						>
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
							defaultValue={nickname}
							onChange={handleNicknameChange}
						/>
						<ChangeButton
							id="changeBtn"
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
