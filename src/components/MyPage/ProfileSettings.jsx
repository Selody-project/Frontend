import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography, Grid } from "@mui/material";
import { updateUserProfile } from "@/features/user/user-service";
import { UserInfoContainer } from "./MyPageDetail.styles";

const ProfileSettings = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { nickname, email, provider } = useSelector((state) => state.user.user);
	const [newNickname, setNewNickname] = useState(nickname);

	useEffect(() => {
		if (provider === "google" || provider === "naver") {
			document.getElementById("PasswordUpdate").style.display = "none";
			document.querySelectorAll("#changeBtn").forEach((btn) => {
				btn.style.display = "none";
			});
			document.getElementById("email").style.display = "none";
			document.getElementById("image").disabled = true;
			document.getElementById("nickname").disabled = true;
		}
	}, []);

	const handleNicknameChange = (e) => {
		setNewNickname(e.target.value);
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
					닉네임을 변경할 수 있습니다.
				</Typography>
			</Box>
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
