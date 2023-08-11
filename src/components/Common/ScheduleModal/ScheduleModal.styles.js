import styled from "styled-components";

export const TitleInput = styled.input`
	border: 1px solid #ced4da;
	font-size: 16px;
	margin-bottom: 20px;
	width: 100%;
	height: 40px;
	border-radius: 4px;
	padding: 0 10px;

	&::placeholder {
		font-family: "Inter", sans-serif;
	}
`;

export const DateInput = styled.input`
	display: block;
	border: 1px solid #ced4da;
	background: #f4f6fc;
	font-size: 16px;
	width: 100%;
	height: 40px;
	border-radius: 4px;
	padding: 0 10px;
	font-family: "Inter", sans-serif;

	&::placeholder {
		font-family: "Inter", sans-serif;
	}

	&:focus {
		outline: none;
	}
`;

export const DetailTextarea = styled.textarea`
	border: 1px solid #ced4da;
	background: #f4f6fc;
	display: block;
	font-size: 16px;
	margin-bottom: 20px;
	resize: none;
	width: 100%;
	height: 100px;
	border-radius: 4px;
	padding: 10px;

	&::placeholder {
		font-family: "Inter", sans-serif;
	}
`;

export const LabelDiv = styled.div`
	color: #30374f;
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 12px;
`;

export const DateContainerDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
`;

export const DateDiv = styled.div`
	display: flex;
	width: 45%;

	& > input:first-of-type {
		margin-right: 10px;
	}
`;

export const RepeatSelect = styled.select``;

export const RepeatTermDiv = styled.div`
	margin-top: 24px;
`;

export const FooterDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 80px;
`;

export const SubmitButton = styled.button`
	all: unset;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	background-color: ${(props) =>
		props.disabled ? "#C9CEDA" : props.theme.colors.primary};
	color: white;
	padding: 12px 40px;
	font-size: 14px;
	font-weight: 600;
`;
