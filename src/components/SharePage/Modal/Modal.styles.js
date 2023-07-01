import styled from "styled-components";

export const ModalContainer = styled.div`
	background: #ffffff;
	border-radius: 8px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	max-width: 600px;
	height: 500px;
	padding: 20px;
	position: relative;
	width: 100%;
	font-family: "Inter", sans-serif;
	z-index: 1;
`;

export const ModalHeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
	font-weight: 600;
`;

export const ModalTitle = styled.input`
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

export const ModalInput = styled.input`
	display: block;
	border: 1px solid #ced4da;
	background: #f4f6fc;
	font-size: 16px;
	margin-bottom: 20px;
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

export const ModalInputGap = styled.div`
	margin-right: 10px;
`;

export const ModalTextarea = styled.textarea`
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

export const ModalDateRow = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ModalDateColumn = styled.div`
	display: flex;
	width: 45%;
	border: none;
`;
