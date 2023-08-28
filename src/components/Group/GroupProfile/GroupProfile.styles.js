import styled from "styled-components";

export const ContainerDiv = styled.div`
	min-width: 380px;
	max-height: 546px;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
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
		font-family: Inter;
		font-size: 24px;
		font-weight: 600;
		margin-top: 24px;
	}

	& > p {
		color: #2f2f2f;
		font-family: Inter;
		font-size: 14px;
		font-weight: 400;
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
		font-family: Inter;
		font-size: 22px;
		font-weight: 600;
	}

	& > h4 {
		font-family: Inter;
		font-size: 16px;
		margin-top: 8px;
	}
`;

export const GroupReqButton = styled.button`
	border: 1px solid ${({ theme: { colors } }) => colors.primary};
	background-color: transparent;
	padding: 12px 74px;
	margin: 26px 48px;
	color: ${({ theme: { colors } }) => colors.primary};
	font-family: Inter;
	font-size: 18px;

	& > svg {
		vertical-align: middle;
	}
`;
