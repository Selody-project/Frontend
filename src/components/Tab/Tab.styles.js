import styled from "styled-components";

export const TabDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& > ul {
		display: flex;
		gap: 48px;
	}
`;

export const TabButton = styled.button`
	color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.text_01 : colors.disabled_text};
	font-size: 18px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	cursor: pointer;
`;
