import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	Button,
	TextField,
	Avatar,
	Box,
	Typography,
	Grid,
} from "@mui/material";
import { updateUserProfile } from "@/features/user/user-service";
import { UserInfoContainer } from "./MyPageDetail.styles";

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
			document.getElementById("email").style.display = "none";

			// setNewImage(password);
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
		<UserInfoContainer maxWidth="md">
			<Box sx={{ marginTop: 3, marginBottom: 2 }}>
				<Typography variant="h4" component="h1" align="center">
					{nickname}님의 프로필
				</Typography>
				<Typography variant="subtitle1" component="h2" align="center">
					프로필 사진과 닉네임을 변경할 수 있습니다.
				</Typography>
			</Box>
			<Grid container spacing={3} direction="column" align="center">
				<Grid item id="avatarGrid">
					<Avatar
						src={newImage}
						id="avatar"
						alt="profile"
						sx={{
							width: 100,
							height: 100,
							margin: "auto",
							bgcolor: "deepOrange.500",
						}}
					/>
					<TextField
						type="file"
						id="image"
						name="image"
						onChange={handleImageChange}
						sx={{ marginTop: 2 }}
					/>
					<Button
						id="changeBtn"
						variant="contained"
						color="secondary"
						onClick={handleImageSubmit}
						disabled={!newImage}
						sx={{ height: 55, marginTop: 2, marginLeft: 1 }}
					>
						저장
					</Button>
				</Grid>
			</Grid>
			<Grid container spacing={6} direction="row" justifyContent="center">
				<Grid item>
					<TextField
						id="nickname"
						label="닉네임"
						defaultValue={nickname}
						onChange={handleNicknameChange}
						sx={{ marginTop: 2 }}
					/>
					<Button
						id="changeBtn"
						variant="contained"
						color="secondary"
						onClick={handleNicknameSubmit}
						disabled={newNickname === nickname}
						sx={{ height: 55, marginTop: 2, marginLeft: 1 }}
					>
						저장
					</Button>
				</Grid>
				<Grid item id="email">
					<TextField
						type="email"
						defaultValue={email}
						disabled
						sx={{ marginTop: 2 }}
					/>
				</Grid>
			</Grid>
		</UserInfoContainer>
	);
};

export default ProfileSettings;
