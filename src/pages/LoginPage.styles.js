import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Arial, sans-serif;
	height: 100vh;
	padding: 0 10px;
	gap: 150px;

	@media (max-width: 798px) {
		flex-direction: column;
		gap: 50px;
	}
`;

export const LeftSide = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 798px) {
		justify-content: center;
	}
`;

export const LogoForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > img {
		width: 60%;
	}

	& > h1 {
		margin: 0 0 0 20px;
		padding: 0;
		font-family: "Montserrat";
		font-size: 50px;
		color: #000000;
		@media (max-width: 798px) {
			margin-left: 0;
			font-size: 40px;
		}
	}
	& > h3 {
		margin-left: 20px;
		font-family: "Spoqa Han Sans Neo";
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 34px;
		color: #000000;
		@media (max-width: 798px) {
			margin-left: 0;
			font-size: 20px;
		}
	}
`;

export const RightSide = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 798px) {
		justify-content: center;
		width: 100%;
	}
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 400px;
	gap: 10px;

	& > h1 {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 800;
		font-size: 36px;
		line-height: 44px;
		color: #6c55fe;
		@media (max-width: 798px) {
			font-size: 28px;
		}
	}
	@media (max-width: 798px) {
		align-items: center;
		width: 100%;
	}
`;

export const Input = styled.input`
	padding: 15px;
	margin: 5px 0;
	background-color: #f2f2f2;
	border: 1px solid #f2f2f2;
	border-radius: 3px;
	@media (max-width: 798px) {
		width: 100%;
	}
`;

export const FindPW = styled.a`
	color: #6c55fe;
	cursor: pointer;
	margin: 5px 0;
	font-family: "Montserrat";
	font-style: normal;
	text-align: right;
	text-decoration: underline;
`;

export const LoginButton = styled.button`
	padding: 15px;
	margin: 5px 0;
	background-color: #6c55fe;
	color: white;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	font-family: "Spoqa Han Sans Neo";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;

	&:hover {
		background-color: #166fe5;
	}

	@media (max-width: 798px) {
		width: 100%;
	}
`;

export const SignUpButton = styled.button`
	padding: 15px;
	background-color: white;
	color: #6c55fe;
	border: 1px solid #6c55fe;
	border-radius: 3px;
	cursor: pointer;
	font-family: "Spoqa Han Sans Neo";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;

	&:hover {
		background-color: #f2f2f2;
	}

	@media (max-width: 798px) {
		width: 100%;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 1.5rem;
`;
