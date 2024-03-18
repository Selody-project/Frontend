import styled from "styled-components";

export const LayoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	font-family: Inter;
	height: ${({ isCommunity }) => (isCommunity ? "486px" : "100%")};

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 24px;
		font-weight: 500;
		margin-top: 18px;
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 14px;
		margin-top: 14px;
	}
`;
