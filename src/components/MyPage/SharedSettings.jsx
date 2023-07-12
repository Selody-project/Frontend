import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoContainer } from "./MyPageDetail.styles";
import {
	getInvitation,
	groupJoin,
} from "@/features/group/group-invite-service.js";

const SharedSettings = () => {
	const dispatch = useDispatch();
	const { searchGroup } = useSelector((state) => state.groupInvite);
	const [inviteCode, setInviteCode] = useState("");

	const inviteCodeHandler = (e) => {
		setInviteCode(e.target.value);
	};

	return (
		<UserInfoContainer>
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
