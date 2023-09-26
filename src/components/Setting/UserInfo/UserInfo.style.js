import styled, { css } from "styled-components";

export const ContainerDiv = styled.div`
	border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
	border-radius: 50px;
	padding: 36px 48px;
	color: ${({ theme: { colors } }) => colors.text_01};
	line-height: normal;

	& > h3 {
		font-size: 20px;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.semibold};
	}
`;

export const InfoDiv = styled.div`
	display: flex;
	align-items: center;
	padding: 22px 0;

	border-bottom: 1px solid #ededed;
	${({ spaceBetween }) =>
		spaceBetween &&
		css`
			justify-content: space-between;
		`}

	#profileImg {
		display: none;
	}
`;

export const LabelH4 = styled.h4`
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
	margin-right: 36px;
`;

export const ProfileImg = styled.img`
	width: 80px;
	height: 80px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	border-radius: 50%;
	object-fit: cover;
`;

export const ImgSelectLabel = styled.label`
	margin-left: 24px;
	color: ${({ theme: { colors } }) => colors.disabled_text};
	font-size: 14px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
	text-decoration: underline;
	cursor: pointer;
`;

export const ButtonWrapDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 86px;
`;

export const SaveButton = styled.button`
	padding: 12px 28px;
	background-color: ${({ theme: { colors } }) => colors.primary_light};
	border-radius: 5px;
	color: ${({ theme: { colors } }) => colors.white};
	font-size: 15px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.semibold};
	cursor: pointer;

	&:disabled {
		background-color: ${({ theme: { colors } }) => colors.disabled_text};
		cursor: not-allowed;
	}
`;
