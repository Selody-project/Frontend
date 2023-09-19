import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ gap }) => gap}px;
	color: ${({ theme: { colors } }) => colors.text_01};
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
`;

export const LabelSpan = styled.span``;

export const Input = styled.input`
	width: 280px;
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	border: 0;
	padding: 12px;

	&:focus {
		outline: 1px solid ${({ theme: { colors } }) => colors.primary};
	}
`;
