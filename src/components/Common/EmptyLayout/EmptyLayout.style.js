import styled from "styled-components";

export const LayoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	font-family: Inter;
	height: 486px;
	margin-top: ${({ hasMargin }) => hasMargin && "32px"};

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

export const ButtonDiv = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 40px;

	& > button {
		text-align: center;
		background-color: ${({ theme: { colors } }) => colors.primary_light};
		width: 174px;
		height: 42px;
		color: ${({ theme: { colors } }) => colors.white};
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
		font-size: 15px;
		border-radius: 5px;
		cursor: pointer;

		&.addButton {
			background-color: ${({ theme: { colors } }) => colors.white};
			border: 1px solid ${({ theme: { colors } }) => colors.primary};
			color: ${({ theme: { colors } }) => colors.primary_light};
		}
	}
`;
