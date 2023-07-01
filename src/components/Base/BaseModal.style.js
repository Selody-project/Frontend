import styled from "styled-components";

export const ModalWrapper = styled.div`
	position: fixed;
	top: 30vh;
	left: 30vw;
	width: 40vw;
	z-index: 100;
	overflow: hidden;
	border-radius: 10px;
	padding: 2.5rem 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-left: 2rem;

	.create-group {
		color: #fff;
		text-align: center;
		margin-bottom: 1rem;
	}
	.create-group-btn {
		padding: 1rem 2rem;
		font-weight: 700;
		border: none;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		h2 {
			font-size: 1.3rem;
			font-weight: 700;
		}
		svg {
			font-size: 1.8rem;
			cursor: pointer;
		}
	}
	.input {
		width: 36vw;
		border-bottom: 2px solid #000;
		padding-bottom: 0.5rem;
		input {
			border: none;
			outline: none;
			width: 100%;
			height: 100%;
			&::placeholder {
				font-weight: 700;
				color: #999;
			}
		}
	}
	.invite {
		width: 38vw;
		margin-top: 1rem;
		input {
			border: none;
			outline: none;
			background: rgba(0, 0, 0, 0.1);
			width: 80%;
			height: 3rem;
			&::placeholder {
				font-weight: 700;
				color: #999;
			}
		}
		button {
			border: none;
			background: rgba(0, 0, 0, 0.8);
			color: #fff;
			height: 3rem;
			margin-left: 1rem;
			padding: 0 1rem;
		}
	}
	.share-btn {
		width: 34vw;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		button {
			margin-top: 1.5rem;
			border: none;
			background: rgba(0, 0, 0, 0.2);
			padding: 1rem 2rem;
			color: #fff;
			&:disabled {
				background: rgba(0, 0, 0, 0.5);
			}
			&:not(:disabled) {
				background: rgba(0, 0, 0, 1);
			}
		}
	}
`;

export const BackdropWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
`;
