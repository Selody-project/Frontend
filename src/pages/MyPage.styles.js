import styled from "styled-components";

export const MyPageContainer = styled.div`
	display: flex;
	margin: 50px 50px 0px 50px;
	font-family: "Inter", sans-serif;
`;

export const TabsContainer = styled.div`
	display: flex;
	flex-direction: column;

	& > h1 {
		font-size: 32px;
		font-weight: 600;
		margin: 20px 0px;
	}
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 160px;
	padding: 12px 20px;
	margin-right: 10px;
	margin-bottom: 5px;
	border-radius: 50px;
	background-color: ${(props) => (props.selected ? "#6c63ff" : "transparent")};
	color: ${(props) => (props.selected ? "white" : "gray")};
	font-weight: ${(props) => (props.selected ? "bold" : "normal")};
	box-shadow: ${(props) =>
		props.selected ? "0px 4px 2px rgba(0, 0, 0, 0.25)" : "none"};
	cursor: pointer;
	transition: all 0.2s ease-in-out;
`;

export const UserInfoContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 600px;
	width: 800px;
	padding: 50px;
	margin: 50px auto;
	border: 2px solid #c6c9d4;
	border-radius: 20px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	background: white;
`;

export const UserInfoSection = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UserInfoItem = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ChangeButton = styled.button`
	width: 50px;
	height: 40px;
	background-color: #6c63ff;
	color: white;
	border: none;
	cursor: pointer;
	margin-left: 15px;
	border-radius: 5px;

	&:hover {
		background-color: #5a4ee3;
	}

	&:disabled {
		background-color: #c6c9d4;
		cursor: not-allowed;
	}
`;

export const Label = styled.label`
	font-size: 16px;
	color: #555555;
	margin-right: 15px;
	margin-bottom: 15px;
`;

export const InputField = styled.input`
	height: 40px;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #c6c9d4;
	transition: border 0.3s ease;
	outline: none;

	&:focus {
		border: 1px solid #6c63ff;
	}
`;

export const PwInfoItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;
`;

export const PasswordContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;

export const SaveButton = styled.button`
	width: 100%;
	height: 50px;
	background-color: #6c63ff;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #5a4ee3;
	}

	&:disabled {
		background-color: #c6c9d4;
		cursor: not-allowed;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const ImagePreview = styled.img`
	width: 100px;
	height: 100px;
	margin-right: 15px;
	margin-bottom: 15px;
	border-radius: 50%;
	object-fit: cover;
`;

export const ImageInput = styled.input`
	display: none;
	&:checked + ${ImagePreview} {
		border: 2px solid #6c63ff;
	}
`;

export const ImageChangeButton = styled.button`
	width: 100px;
	height: 30px;
	background-color: #6c63ff;
	color: white;
	border: none;
	border-radius: 5px;
	margin-left: 15px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #5a4ee3;
	}

	&:disabled {
		background-color: #c6c9d4;
		cursor: not-allowed;
	}
`;
