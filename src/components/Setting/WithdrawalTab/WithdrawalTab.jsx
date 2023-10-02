import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { withdrawMembership } from "@/features/auth/auth-service";

import First from "./First";
import Second from "./Second";
import { ContainerDiv } from "./WithdrawalTab.style";

const WithdrawalTab = () => {
	const dispatch = useDispatch();

	const [isFirst, setIsFirst] = useState(true);

	const handleClickWithdrawal = async () => {
		dispatch(withdrawMembership());
	};

	return (
		<ContainerDiv>
			{isFirst ? (
				<First handleFirst={() => setIsFirst(false)} />
			) : (
				<Second
					handleFirst={() => setIsFirst(true)}
					handleClickWithdrawal={handleClickWithdrawal}
				/>
			)}
		</ContainerDiv>
	);
};

export default WithdrawalTab;
