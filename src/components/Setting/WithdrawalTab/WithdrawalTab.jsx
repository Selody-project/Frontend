import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BaseModal from "@/components/Base/BaseModal/BaseModal";
import { withdrawMembership } from "@/features/auth/auth-service";
import { closeModal, openModal } from "@/features/ui/ui-slice";

import {
	AgreeLabel,
	ButtonWrapDiv,
	ContainerDiv,
	ContentP,
	ModalContentDiv,
	ModalFooter,
	WithdrawalButton,
} from "./WithdrawalTab.style";

const WithdrawalTab = () => {
	const dispatch = useDispatch();

	const { openedModal } = useSelector((state) => state.ui);

	const [isAgree, setIsAgree] = useState(false);

	const handleClickWithdrawal = () => {
		dispatch(withdrawMembership());
		dispatch(closeModal());
	};

	return (
		<ContainerDiv>
			<h3>회원 탈퇴 전, 꼭 확인하세요!</h3>
			<ContentP>
				<span>
					계정을 탈퇴하면 계정 정보 및 현재 이용중인 세부 서비스의 모든 정보가
					삭제됩니다.
				</span>
				<br />
				탈퇴한 후에는 더 이상 해당 계정으로 로그인 할 수 없으므로, 모든 세부
				서비스들도 이용할 수 없게 됩니다.
				<br />
				탈퇴된 개인 정보와 서비스 이용기록 등은 복구할 수 없으니 신중하게
				선택하시길 바랍니다.
			</ContentP>
			<AgreeLabel>
				<input
					type="checkbox"
					id="hidden-checkbox"
					defaultChecked={isAgree}
					onClick={() => setIsAgree((prev) => !prev)}
				/>
				<div id="shown-checkbox" />
				<span>상기 탈퇴 시 유의 사항을 확인하였습니다.</span>
			</AgreeLabel>
			<ButtonWrapDiv>
				<WithdrawalButton
					onClick={() => dispatch(openModal({ type: "WITHDRAW" }))}
					disabled={!isAgree}
				>
					탈퇴하기
				</WithdrawalButton>
			</ButtonWrapDiv>
			{openedModal === "WITHDRAW" && (
				<BaseModal
					style={{
						backgroundColor: "white",
						borderRadius: "10px",
					}}
					hasClose={false}
				>
					<ModalContentDiv>
						<p>
							Selody를 정말
							<br />
							탈퇴하시겠습니까?
						</p>
					</ModalContentDiv>
					<ModalFooter>
						<button type="button" onClick={() => dispatch(closeModal())}>
							아니요
						</button>
						<button type="button" onClick={handleClickWithdrawal}>
							예
						</button>
					</ModalFooter>
				</BaseModal>
			)}
		</ContainerDiv>
	);
};

export default WithdrawalTab;
