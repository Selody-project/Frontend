import styled from "styled-components";

export const ContainerAside = styled.aside`
	display: flex;
	flex-direction: column;
	gap: 20px;
	font-family: Inter;
`;

export const MemberDiv = styled.div`
	width: 208px;
	padding: 14px 0;
	border-radius: 4px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};

	& > hr {
		border-top: 1px solid ${({ theme: { colors } }) => colors.btn_02};
		margin: 18px 0;
	}
`;

export const OptionMenuDiv = styled.div`
	width: 60px;
	height: 30px;
	z-index: 2;
	background-color: ${({ theme: { colors } }) => colors.white};
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme: { colors } }) => colors.text_02};
	font-size: ${({ theme: { typography } }) => typography.size.s1};
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	position: absolute;
`;

export const ButtonDiv = styled.div`
	display: flex;
	gap: 12px;
`;

export const ButtonInnerDiv = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	align-items: center;

	& > span {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 10px;
	}
`;
