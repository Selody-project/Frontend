import styled from "styled-components";

export const GroupNameInput = styled.input`
	all: unset;
	width: 590px;
	padding: 12px 0;
	outline: none;
	border-bottom: 1px solid black;
	color: ${({ theme: { colors } }) => colors.text_03};
	font-family: Inter;
	font-size: 18px;
	font-weight: 500;

	&::placeholder {
		color: ${({ theme: { colors } }) => colors.disabled_01};
	}
`;

export const GroupIntroduceTextarea = styled.textarea`
	margin-top: 24px;
	padding: 8px;
	outline: none;
	border: 0;
	background-color: ${({ theme: { colors } }) => colors.bg_03};
	height: 134px;
	resize: none;
	color: ${({ theme: { colors } }) => colors.text_03};
	font-family: Inter;
	font-size: 13px;
	font-weight: 500;

	&::placeholder {
		color: ${({ theme: { colors } }) => colors.modal_disabled_text};
	}
`;

export const ButtonWrapDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 16px;
`;

export const GroupCreateButton = styled.button`
	all: unset;
	cursor: pointer;
	padding: 12px 40px;
	border-radius: 5px;
	background-color: ${({ theme: { colors } }) => colors.primary};
	color: white;
	font-family: Inter;
	font-size: 14px;
	font-weight: 600;
	line-height: normal;

	&:disabled {
		cursor: not-allowed;
		background-color: ${({ theme: { colors } }) =>
			colors.modal_disabled_button};
	}
`;
