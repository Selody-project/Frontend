import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 700;
	font-size: 45px;
	line-height: 55px;
	height: 100px;
	margin-right: 700px;
	padding: 12rem 0 70px 0;

	@media (max-width: 798px) {
		align-items: center;
		padding: 0;
		margin: 0;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: start;
	font-family: Arial, sans-serif;
	height: auto;
	padding: 0 10px;
	margin-right: 50px;
	gap: 150px;

	@media (max-width: 798px) {
		flex-direction: column;
		align-items: center;
		margin: 0;
		padding: 0;
		gap: 0px;
	}
`;

export const LeftSide = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 798px) {
		padding: 50px 0;
	}
`;

export const LogoForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: "Montserrat";
	font-style: normal;

	@media (max-width: 798px) {
		align-items: center;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	& > h1 {
		margin: 0;
		padding: 0;
		font-weight: 700;
		font-size: 50px;
		line-height: 55px;
		color: #000000;
	}

	@media (max-width: 798px) {
		flex-direction: column;
		margin: 50px 0 0 0;
	}
`;

export const LogoContainer2 = styled.div`
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	& > h3 {
		font-weight: 800;
		font-size: 40px;
		line-height: 49px;
		color: #6c55fe;
	}

	& > h4 {
		font-weight: 700;
		font-size: 20px;
		line-height: 24px;
		color: #000000;
	}

	@media (max-width: 798px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		& > h4 {
			display: none;
		}
	}
`;

export const RightSide = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 2rem;

	@media (max-width: 798px) {
		padding: 50px 0;
		width: 100%;
	}
`;

export const SignUpForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 500px;
	font-family: "Spoqa Han Sans Neo";
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	gap: 10px;

	a {
		padding: 15px;
		background-color: gray;
		color: #ffffff;
		font-size: 14px;
		font-weight: 700;
		border: none;
		border-radius: 5px;
		text-align: center;
		text-decoration: none; // d
		cursor: pointer;

		&:hover {
			background-color: #5b46e0;
		}

		@media (max-width: 798px) {
			width: 100%;
		}
	}

	& > h1 {
		color: #6c55fe;
	}

	@media (max-width: 798px) {
		align-items: center;
		width: 100%;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 10px 0 15px 0;
`;

export const Input = styled.input`
	width: 100%;
	padding: 15px;
	background-color: #f2f2f2;
	border: 1px solid #f2f2f2;
	border-radius: 3px 0 0 3px;
	font-size: 14px;
	font-weight: 700;
	color: #6c55fe;
	outline: none;

	&:focus {
		border: 1px solid #6c55fe;
	}
`;

export const DuplicateCheckButton = styled.button`
	width: 150px;
	height: 48px;
	opacity: 0.8;
	padding: 5px;
	background-color: #6c55fe;
	color: #ffffff;
	border: none;
	border-radius: 0 3px 3px 0;
	cursor: pointer;

	&:hover {
		background-color: #5b46e0;
	}
`;

export const SignUpButton = styled.button`
	padding: 15px;
	background-color: #6c55fe;
	color: #ffffff;
	font-size: 14px;
	font-weight: 700;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #5b46e0;
	}

	@media (max-width: 798px) {
		width: 100%;
	}
`;
