import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-right: 76px;
	border: 1px solid #c9ccd7;
	border-radius: 10px;

	& > h3 {
		font-family: Inter;
		font-size: 24px;
		margin-top: 20px;
	}

	& > h4 {
		color: #2f2f2f;
		font-family: Inter;
		font-size: 14px;
		font-weight: 400;
		margin-top: 12px;
	}
`;
