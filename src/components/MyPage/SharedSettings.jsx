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
import { getGroupList, deleteGroup } from "@/features/group/group-service";

const SharedSettings = () => {
	const dispatch = useDispatch();
	const groupList = useSelector((state) => state.group);
	const { user } = useSelector((state) => state.user);
	const [currentGroup, setCurrentGroup] = useState(null);
	const [openDelegate, setOpenDelegate] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);

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
										<MemberButton type="button">그룹 탈퇴</MemberButton>
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
					</>
				);
			})}
		</UserInfoContainer>
	);
};

export default SharedSettings;
