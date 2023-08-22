import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Typography, Button, TextField, Box, Grid, Alert } from "@mui/material";

import { updateUserPassword } from "@/features/user/user-service";

import { UserInfoContainer } from "./SettingPageDetail.styles";

const PasswordUpdate = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const handleCurrentPasswordChange = (e) => {
		setCurrentPassword(e.target.value);
	};

	const handleNewPasswordChange = (e) => {
		setNewPassword(e.target.value);
	};

	const handleConfirmNewPasswordChange = (e) => {
		setConfirmNewPassword(e.target.value);
	};

	const handlePasswordSubmit = (e) => {
		e.preventDefault();
		if (newPassword !== confirmNewPassword) {
			setPasswordsMatch(false);
			return;
		}

		dispatch(updateUserPassword({ password: newPassword }));
		navigate("/mypage");
	};

	return (
		<UserInfoContainer maxWidth="md">
			<Box sx={{ marginTop: 3, marginBottom: 2 }}>
				<Typography variant="h4" component="h1" align="center">
					비밀번호 변경
				</Typography>
				<Typography variant="subtitle1" component="h2" align="center">
					최소 10자리 이상의 비밀번호를 입력해주세요.
				</Typography>
				{!passwordsMatch && (
					<Alert severity="error">새 비밀번호가 일치하지 않습니다.</Alert>
				)}
			</Box>
			<Grid container spacing={2} direction="column" justifyContent="center">
				<Grid item xs={12} sm={6} margin="auto">
					<TextField
						id="currentPassword"
						label="현재 비밀번호"
						type="password"
						onChange={handleCurrentPasswordChange}
					/>
				</Grid>
				<Grid item xs={12} sm={6} margin="auto">
					<TextField
						id="newPassword"
						label="새 비밀번호"
						type="password"
						onChange={handleNewPasswordChange}
					/>
				</Grid>
				<Grid item xs={12} sm={6} margin="auto">
					<TextField
						id="confirmNewPassword"
						label="새 비밀번호 확인"
						type="password"
						onChange={handleConfirmNewPasswordChange}
					/>
				</Grid>
				<Grid item xs={12} sm={6} margin="auto">
					<Button
						variant="contained"
						color="secondary"
						onClick={handlePasswordSubmit}
						disabled={!(currentPassword && newPassword && confirmNewPassword)}
					>
						저장하기
					</Button>
				</Grid>
			</Grid>
		</UserInfoContainer>
	);
};

export default PasswordUpdate;
