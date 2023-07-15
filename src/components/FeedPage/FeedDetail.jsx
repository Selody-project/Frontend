import React, { useState } from "react";
import {
	Card,
	Typography,
	Button,
	TextField,
	Box,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const FeedDetail = ({ groupInfo }) => {
	const feedItems = [
		{
			id: "1",
			title: "더미 데이터 1번",
			content: "피드의 더미 데이터",
		},
		{
			id: "2",
			title: "더미 데이터 2번",
			content: "또 다른 더미 데이터",
		},
	];

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			display="flex"
			p={2}
			flexDirection="row"
			gap={2}
			bgcolor="#F0F0FA"
			height="100vh"
		>
			{/* 그룹 사이드바 추가 섹션 */}
			<Card
				style={{
					width: "20%",
					margin: "10px 20px 0px 20px",
					maxHeight: "500px",
				}}
			>
				그룹 : {groupInfo.name}
			</Card>
			<Box display="flex" p={2} width="60%" flexDirection="column">
				<Card sx={{ p: 2, mb: 2 }}>
					<TextField
						label="그룹에 공유하고 싶은 글을 작성하여 올려보세요."
						variant="outlined"
						fullWidth
						multiline
						rows={4}
						sx={{ mb: 2 }}
					/>
					<Button
						variant="contained"
						color="primary"
						sx={{ float: "right" }}
						style={{ width: "120px", height: "45px" }}
					>
						Post
					</Button>
				</Card>

				<Box>
					<Box
						display="flex"
						p={2}
						flexDirection="row"
						justifyContent="space-between"
					>
						<Typography variant="h5">그룹 피드</Typography>
						<Typography variant="h6">최신순</Typography>
					</Box>
					{feedItems.map((item) => (
						<Card key={item.id} sx={{ mb: 2, p: 2 }}>
							<Box display="flex" justifyContent="space-between">
								<Typography variant="h6" mb={1}>
									{item.title}
								</Typography>
								<IconButton onClick={handleMenuClick}>
									<MoreVertIcon />
								</IconButton>
								<Menu
									anchorEl={anchorEl}
									open={open}
									onClose={handleMenuClose}
									onClick={handleMenuClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
											mt: 1.5,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
											"&:before": {
												content: '""',
												display: "block",
												position: "absolute",
												top: 0,
												right: 14,
												height: 10,
												width: 10,
												bgcolor: "background.paper",
												transform: "translateY(-50%) rotate(45deg)",
												zIndex: 0,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>수정</MenuItem>
									<MenuItem style={{ color: "red" }}>삭제</MenuItem>
								</Menu>
							</Box>
							<Typography>{item.content}</Typography>
						</Card>
					))}
				</Box>
			</Box>
			<Card
				style={{
					width: "20%",
					margin: "10px 20px 0px 20px",
					maxHeight: "650px",
				}}
			>
				그룹 : {groupInfo.name}
			</Card>
		</Box>
	);
};

export default FeedDetail;
