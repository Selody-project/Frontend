import {
	Box,
	Button,
	TextField,
	Autocomplete,
	Menu,
	List,
	ListItem,
	ListItemText,
	InputAdornment,
} from "@mui/material";
import { useSelector } from "react-redux";

const InviteUser = ({
	selectedGroup,
	setSelectedGroup,
	handleInviteButtonClick,
	anchorEl,
	handleCloseMenu,
	inviteInput,
	setInviteInput,
	handleSendInvite,
	invitationLink,
	setInvitationLink,
}) => {
	const groupList = useSelector((state) => state.group);

	return (
		<div>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				marginBottom="2rem"
			>
				<Button
					variant="contained"
					disabled={!selectedGroup}
					onClick={handleInviteButtonClick}
				>
					사용자 초대
				</Button>
				<Autocomplete
					id="size-small-standard-multi"
					size="small"
					options={groupList.groupList}
					getOptionLabel={(option) => option.name}
					style={{ width: 150, marginLeft: "1rem" }}
					onChange={(event, value) => setSelectedGroup(value)}
					renderInput={(params) => <TextField {...params} label="그룹 선택" />}
				/>
			</Box>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
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
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<List>
					<ListItem style={{ paddingTop: "0px", paddingBottom: "0px" }}>
						<ListItemText primary={selectedGroup ? selectedGroup.name : ""} />
					</ListItem>
					<ListItem>
						<TextField
							autoFocus
							margin="dense"
							label="초대할 이메일 또는 코드 입력"
							type="email"
							fullWidth
							value={inviteInput}
							onChange={(e) => setInviteInput(e.target.value)}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Button onClick={handleSendInvite}>초대</Button>
									</InputAdornment>
								),
							}}
						/>
					</ListItem>
					<ListItem>
						<TextField
							margin="dense"
							label="링크로 사용자 초대"
							type="text"
							fullWidth
							value={invitationLink}
							onChange={(e) => setInvitationLink(e.target.value)}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<Button>링크 복사</Button>
									</InputAdornment>
								),
							}}
						/>
					</ListItem>
				</List>
			</Menu>
		</div>
	);
};

export default InviteUser;
