import styled from "styled-components";

export const LayoutDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	font-family: Inter;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 24px;
		font-weight: 500;
		margin-top: 16px;
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 14px;
		margin-top: 12px;
	}
`;
