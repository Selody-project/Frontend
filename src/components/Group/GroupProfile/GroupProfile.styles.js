import styled from "styled-components";

export const ContainerDiv = styled.div`
	min-width: 380px;
	height: 546px;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	font-family: Inter;
`;

export const TopDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 60px 0;

	& > img {
		width: 110px;
		height: 110px;
		border-radius: 50%;
		object-fit: cover;
	}

	& > h3 {
		font-size: ${({ theme: { typography } }) => typography.size.m2};
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
		margin-top: 24px;
		color: ${({ theme: { colors } }) => colors.text_01};
	}

	& > p {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 14px;
		font-size: ${({ theme: { typography } }) => typography.size.s2};
		margin-top: 16px;
		text-align: center;
		line-height: normal;
	}
`;

export const MiddleDiv = styled.div`
	border-top: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	display: flex;
	padding: 34px 0;
`;

export const MiddleInnerDiv = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	&::after {
		content: "";
		width: 1px;
		height: 70px;
		background-color: ${({ theme: { colors } }) => colors.btn_02};
		position: absolute;
		right: 0;
	}

	&:last-of-type::after {
		content: none;
	}

	& > h3 {
		font-size: 22px;
		font-weight: ${({ theme: { typography } }) => typography.weight.semibold};
		color: ${({ theme: { colors } }) => colors.text_01};
	}

	& > h4 {
		font-size: ${({ theme: { typography } }) => typography.size.s3};
		font-weight: ${({ theme: { typography } }) => typography.weight.medium};
		color: ${({ theme: { colors } }) => colors.text_02};
		margin-top: 8px;
	}
`;

export const BottomDiv = styled.div`
	padding: 26px 48px;

	& > button {
		border: 1px solid ${({ theme: { colors } }) => colors.primary};
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		width: 282px;
		height: 48px;
		color: ${({ theme: { colors } }) => colors.primary};
		font-size: 18px;
	}
`;
