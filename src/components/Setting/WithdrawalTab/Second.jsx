import React from "react";

import { CancelButton } from "./Second.style";
import { ButtonWrapDiv, ContentP, WithdrawalButton } from "./shared.style";

const Second = ({ handleFirst, handleClickWithdrawal }) => {
	return (
		<>
			<h3>회원 탈퇴 신청</h3>
			<ContentP>
				<span>그동안 &apos;Selody&apos;를 이용해 주셔서 감사합니다.</span>
			</ContentP>
			<ButtonWrapDiv>
				<CancelButton onClick={handleFirst}>취소하기</CancelButton>
				<WithdrawalButton onClick={handleClickWithdrawal}>
					탈퇴하기
				</WithdrawalButton>
			</ButtonWrapDiv>
		</>
	);
};

export default Second;
