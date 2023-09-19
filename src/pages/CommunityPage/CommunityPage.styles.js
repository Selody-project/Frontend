import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 90px 82px 0;
	font-family: Inter;
`;

export const FeedDiv = styled.div`
	margin-top: 50px;

	& > ul {
		display: flex;
		gap: 24px;
	}
`;

export const Button = styled.button`
	color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.text_01 : colors.disabled_text};
	font-size: 18px;
	font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
	cursor: pointer;
`;
