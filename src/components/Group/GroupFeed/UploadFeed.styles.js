import styled from "styled-components";

export const ContainerDiv = styled.div`
	width: 643px;
	height: 157px;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	margin-bottom: 36px;
	padding: 24px 24px 18px 18px;
`;

export const TopDiv = styled.div`
	display: flex;
`;

export const ProfileDiv = styled.div`
	min-width: 58px;
	width: 58px;
	height: 58px;
	border-radius: 50%;
	background-color: #eff0f4;
`;

export const UploadTextarea = styled.textarea`
	all: unset;
	margin-left: 16px;
	padding: 14px;
	width: 527px;
	height: 100px;
	border-radius: 4px;
	border: ${({ theme: { colors } }) => colors.bg_01};
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	box-sizing: border-box;

	&::placeholder {
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-family: Inter;
		font-size: 15px;
		font-weight: 400;
	}
`;

export const UploadButton = styled.button`
	all: unset;
	margin-top: 12px;
	float: right;
	padding: 12px 46px;
	border-radius: 5px;
	background-color: ${({ theme: { colors } }) => colors.btn_02};
	color: ${({ theme: { colors } }) => colors.white};
	/* text-align: center; */
	font-family: Inter;
	font-size: 14px;
	/* font-style: normal; */
	font-weight: 500;
	/* line-height: normal; */
`;
