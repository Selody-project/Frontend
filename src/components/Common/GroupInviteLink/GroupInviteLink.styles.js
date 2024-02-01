import styled from "styled-components";

export const ContainerDiv = styled.div`
	width: 421px;
	height: 142px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	background-color: ${({ theme: { colors } }) => colors.white};
	padding: 20px;
	position: absolute;
	top: 80px;
	left: 48px;
	box-sizing: border-box;
	z-index: 1;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: ${({ theme: { typography } }) => typography.size.s2};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		margin-top: 12px;
	}
`;

export const TopDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: ${({ theme: { typography } }) => typography.size.s2};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	}

	& > svg {
		width: 14px;
		height: 14px;
		cursor: pointer;
	}
`;

export const MiddleDiv = styled.div`
	margin-top: 16px;
	font-size: ${({ theme: { typography } }) => typography.size.s2};
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	display: flex;
	gap: 8px;

	& > button {
		width: 60px;
		height: 40px;
		background-color: ${({ theme: { colors } }) => colors.text_02};
		color: ${({ theme: { colors } }) => colors.white};
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;

export const TextDiv = styled.div`
	width: 314px;
	height: 40px;
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	color: ${({ theme: { colors } }) => colors.disabled_text};
	display: flex;
	align-items: center;
	padding-left: 10px;
	box-sizing: border-box;
`;
