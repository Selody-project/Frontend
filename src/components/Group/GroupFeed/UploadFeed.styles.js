import styled from "styled-components";

export const UploadSection = styled.section`
	height: 150px;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	margin-bottom: 72px;
	padding: 24px 24px 18px 18px;
	font-family: Inter;
`;

export const TopDiv = styled.div`
	display: flex;

	& > img {
		width: 58px;
		height: 58px;
		border-radius: 50%;
		object-fit: cover;
	}
`;

export const UploadTextarea = styled.textarea`
	all: unset;
	margin-left: 16px;
	padding: 14px;
	width: 100%;
	min-height: 100px;
	border-radius: 4px;
	border: ${({ theme: { colors } }) => colors.bg_01};
	background-color: ${({ theme: { colors } }) => colors.bg_01};
	box-sizing: border-box;

	&::placeholder {
		color: ${({ theme: { colors } }) => colors.disabled_text};
		font-size: 15px;
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
	font-size: ${({ theme: { typography } }) => typography.size.s2};
	font-weight: ${({ theme: { typography } }) => typography.weight.medium};
`;

export const UploadDiv = styled.div`
	margin-bottom: 72px;
`;
