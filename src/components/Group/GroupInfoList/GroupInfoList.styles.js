import styled from "styled-components";

export const ContainerDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px 26px;
	margin-top: 42px;
	font-family: Inter;
`;

export const GroupDiv = styled.div`
	position: relative;

	& > a {
		border-radius: 10px;
		border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 24px 0;
		cursor: pointer;

		& > img {
			width: 58px;
			height: 58px;
			border-radius: 50%;
			object-fit: cover;
		}

		& > h3 {
			max-width: 260px;
			overflow: hidden;
			text-overflow: ellipsis;
			color: ${({ theme: { colors } }) => colors.text_01};
			font-size: ${({ theme: { typography } }) => typography.size.m1};
			font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
			margin-top: 12px;
		}

		& > p {
			max-width: 260px;
			height: 34px;
			color: ${({ theme: { colors } }) => colors.text_02};
			font-size: ${({ theme: { typography } }) => typography.size.s2};
			margin-top: 4px;
			display: flex;
			align-items: center;
			text-align: center;
		}

		& > h4 {
			color: ${({ theme: { colors } }) => colors.disabled_text};
			font-size: ${({ theme: { typography } }) => typography.size.s2};
			font-weight: ${({ theme: { typography } }) => typography.weight.medium};
			margin-top: 10px;
		}
	}
`;

export const OptionDiv = styled.div`
	position: absolute;
	right: 12px;
	top: 12px;
	cursor: pointer;
`;

export const OptionMenuButton = styled.button`
	width: 60px;
	height: 30px;
	z-index: 2;
	background-color: ${({ theme: { colors } }) => colors.white};
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme: { colors } }) => colors.error};
	font-size: ${({ theme: { typography } }) => typography.size.s1};
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};
	position: absolute;
`;
