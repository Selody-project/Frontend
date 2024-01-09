import styled from "styled-components";

export const ModalContentDiv = styled.div`
	text-align: center;
	line-height: normal;
	font-family: inter;
	font-size: 24px;
	font-weight: ${({ theme }) => theme.typography.weight.medium};
	padding: 88px 160px;
`;

export const ModalFooter = styled.footer`
	display: flex;
	background-color: blue;
	& > button {
		cursor: pointer;
		padding: 28px 0;
		text-align: center;
		line-height: normal;
		font-family: inter;
		font-size: 24px;
		font-weight: ${({ theme }) => theme.typography.weight.medium};
	}
	& > button:first-of-type {
		background-color: ${({ theme }) => theme.colors.btn_02};
		color: ${({ theme: { colors } }) => colors.text_01};
		flex: 7;
	}
	& > button:last-of-type {
		background-color: ${({ theme }) => theme.colors.btn_01};
		color: ${({ theme: { colors } }) => colors.white};
		flex: 10;
	}
`;
