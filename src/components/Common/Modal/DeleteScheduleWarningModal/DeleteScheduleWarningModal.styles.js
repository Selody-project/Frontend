import styled from "styled-components";

export const ContainerDiv = styled.div`
	width: calc(409px - 20 * 2px);
	height: calc(286px - 20 * 2px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const ModalH2 = styled.h2`
	margin-top: 33px;
	font-size: 18px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.semibold};
	color: ${({ theme: { colors } }) => colors.text_01};
`;

export const DescriptionP = styled.p`
	line-height: 1.2;
	text-align: center;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
	color: ${({ theme: { colors } }) => colors.disabled_text};
`;

export const SubmitButton = styled.button`
	width: calc(100% - 22 * 2px);
	height: 48px;
	border-radius: 5px;
	text-align: center;
	background-color: ${({ theme: { colors } }) => colors.btn_01};
	color: ${({ theme: { colors } }) => colors.white};
	cursor: pointer;

	&:hover {
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}

	&:active {
		box-shadow: 0 0 0 0;
	}

	transition: box-shadow 0.3s;
`;
