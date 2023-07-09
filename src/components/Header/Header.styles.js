import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: "Inter", sans-serif;
	font-weight: 600;
	padding: 1.5rem;
	background: #f5f5f8;
`;

export const MenuWrapper = styled.div`
	display: flex;
	align-items: center;

	h1 {
		font-size: 2rem;
		color: #96a2b0;
		margin-right: 1rem;
	}

	ul {
		display: flex;
		padding-top: 1rem;
		gap: 3rem;

		a {
			color: #303030;
			font-size: 1.15rem;
			font-weight: 700;
			text-transform: uppercase;
			text-decoration: none;
			transition: all 0.3s;
			border-bottom: 2px solid transparent;
			padding: 10px 20px;
			border-radius: 8px;

			&.active-link {
				color: #ffffff;
				background-color: #000000;
			}

			&:hover {
				border-color: #ffffff;
				background-color: #000000;
				color: #ffffff;
				transform: scale(1.1);
			}
		}
	}
`;

export const AuthButton = styled.div`
	a {
		color: #6a6d75;
		font-size: 1.25rem;
		font-weight: 700;

		&:hover {
			color: black;
		}
	}

	button {
		font-size: 1.25rem;
		font-weight: 700;
		background: none;
		border: none;
		color: #6a6d75;
		transition: all 0.3s;
		&:hover {
			color: black;
		}
	}
`;
