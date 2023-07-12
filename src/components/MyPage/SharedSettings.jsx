import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CloseIcon from "@mui/icons-material/Close";
import {
	Switch,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@mui/material";
import {
	UserInfoContainer,
	LeaderLabel,
	Wrapper,
	InfoWrapper,
	SwitchWrapper,
	HostButton,
	MemberButton,
	DelegateButton,
} from "./MyPageDetail.styles";
import {
	getGroupList,
	deleteGroup,
	leaveGroup,
} from "@/features/group/group-service";
import {
	getInvitation,
	groupJoin,
} from "@/features/group/group-invite-service.js";

const SharedSettings = () => {
	const dispatch = useDispatch();
	const groupList = useSelector((state) => state.group);
	const { user } = useSelector((state) => state.user);
	const [currentGroup, setCurrentGroup] = useState(null);
	const [openDelegate, setOpenDelegate] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [confirmLeaveDialogOpen, setConfirmLeaveDialogOpen] = useState(false);
	const [groupToLeave, setGroupToLeave] = useState(null);
	const { searchGroup } = useSelector((state) => state.groupInvite);
	const [inviteCode, setInviteCode] = useState("");

	const inviteCodeHandler = (e) => {
		setInviteCode(e.target.value);
	};

	useEffect(() => {
		dispatch(getGroupList());
	}, []);

	const handleClickOpenDelegate = (group) => {
		setCurrentGroup(group);
		setOpenDelegate(true);
	};

	const handleClickOpenDelete = (group) => {
		setCurrentGroup(group);
		setOpenDelete(true);
	};

	const handleClose = () => {
		setOpenDelegate(false);
		setOpenDelete(false);
		setCurrentGroup(null);
	};

	const handleDeleteGroup = () => {
		dispatch(deleteGroup(currentGroup.groupId)).then(() => {
			dispatch(getGroupList());
		});
		handleClose();
	};

	const handleLeaveGroup = (groupId) => {
		setGroupToLeave(groupId);
		setConfirmLeaveDialogOpen(true);
	};

	const confirmLeaveGroup = () => {
		if (groupToLeave) {
			dispatch(leaveGroup(groupToLeave)).then(() => {
				dispatch(getGroupList());
				setConfirmLeaveDialogOpen(false);
				setGroupToLeave(null);
			});
		}
	};

	return (
		<UserInfoContainer>
			{groupList.groupList.map((group) => {
				const isLeader = group.leader === user.userId;

				return (
					<>
						<Wrapper key={group.groupId}>
							<InfoWrapper>
								<div>
									<Typography variant="h6">{group.name}</Typography>
									{isLeader && (
										<BorderColorOutlinedIcon
											fontSize="medium"
											style={{ marginLeft: "15px" }}
										/>
									)}
									{isLeader && (
										<LeaderLabel style={{ marginLeft: "20px" }}>
											방장
										</LeaderLabel>
									)}
								</div>
								<div>
									{isLeader ? (
										<>
											<HostButton
												type="button"
												onClick={() => handleClickOpenDelegate(group)}
											>
												방장 위임
											</HostButton>
											<HostButton
												type="button"
												onClick={() => handleClickOpenDelete(group)}
											>
												그룹 삭제
											</HostButton>
										</>
									) : (
										<MemberButton
											type="button"
											onClick={() => handleLeaveGroup(group.groupId)}
										>
											그룹 탈퇴
										</MemberButton>
									)}
								</div>
							</InfoWrapper>
							<hr />
							<SwitchWrapper>
								<Typography>일정 공유 여부</Typography>
								<Switch defaultChecked />
								<Typography>일정 알림</Typography>
								<Switch />
								<Typography>채팅 알림</Typography>
								<Switch />
							</SwitchWrapper>
						</Wrapper>
						<Dialog
							open={openDelegate}
							onClose={handleClose}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<CloseIcon
								onClick={handleClose}
								style={{
									display: "flex",
									alignItems: "center",
									marginLeft: "auto",
								}}
							>
								취소
							</CloseIcon>
							<DialogTitle>
								그룹 {currentGroup ? currentGroup.name : ""}를 위임받을 사용자를
								선택해주세요.
							</DialogTitle>
							<DialogContent>
								<DialogContentText>
									위임받을 사용자를 선택하고 위임하기 버튼을 누르면 방장 권한이
									해당 사용자에게 넘어갑니다.
								</DialogContentText>
							</DialogContent>
							<DialogContent>그룹원 목록</DialogContent>
							<DelegateButton
								type="button"
								style={{
									margin: "auto",
									marginBottom: "20px",
								}}
							>
								위임하기
							</DelegateButton>
						</Dialog>
						<Dialog
							open={openDelete}
							onClose={handleClose}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<CloseIcon
								onClick={handleClose}
								style={{
									display: "flex",
									alignItems: "center",
									marginLeft: "auto",
								}}
							>
								취소
							</CloseIcon>
							<DialogTitle>
								{currentGroup ? currentGroup.name : ""} 페이지를 정말
								삭제하실건가요?
							</DialogTitle>
							<DialogContent>
								<DialogContentText>
									삭제하면 모든 내용이 모두 삭제되어 복구가 불가능합니다.
								</DialogContentText>
							</DialogContent>
							<DelegateButton
								type="button"
								style={{
									margin: "auto",
									marginBottom: "20px",
								}}
								onClick={handleDeleteGroup}
							>
								삭제하기
							</DelegateButton>
							<span style={{ fontSize: "12px", color: "gray" }}>
								아니면 이런 방법은 어떠세요?
							</span>
							<Button
								type="button"
								style={{
									margin: "auto",
									marginTop: "10px",
									marginBottom: "20px",
									color: "#6C55FE",
									fontSize: "12px",
									border: "1px solid #6C55FE",
								}}
								onClick={() => handleClickOpenDelegate(group)}
							>
								다른 사람에게 위임하기
							</Button>
						</Dialog>
						<Dialog
							open={confirmLeaveDialogOpen}
							onClose={() => setConfirmLeaveDialogOpen(false)}
						>
							<DialogTitle>그룹 탈퇴 확인</DialogTitle>
							<DialogContent>
								<DialogContentText>
									정말로 이 그룹에서 탈퇴하시겠습니까?
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button
									onClick={() => setConfirmLeaveDialogOpen(false)}
									color="primary"
								>
									취소
								</Button>
								<Button onClick={confirmLeaveGroup} color="primary">
									확인
								</Button>
							</DialogActions>
						</Dialog>
					</>
				);
			})}
			<div>
				<h2>초대코드 입력</h2>
				<input
					type="text"
					name="inviteCode"
					id="inviteCode"
					value={inviteCode}
					onChange={inviteCodeHandler}
				/>
				<button
					type="button"
					onClick={() => dispatch(getInvitation(inviteCode))}
				>
					검색
				</button>
			</div>
			{searchGroup && (
				<div>
					<h2>{searchGroup?.name || ""}</h2>
					<button type="button" onClick={() => dispatch(groupJoin(inviteCode))}>
						그룹 들어가기
					</button>
				</div>
			)}
		</UserInfoContainer>
	);
};

export default SharedSettings;
