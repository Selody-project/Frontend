import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 2rem 2rem 6rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	font-family: "Inter", sans-serif;
`;

export const MenuWrapper = styled.div`
	display: flex;
	align-items: center;

	h1 {
		min-width: 200px;
		font-weight: 700;
		font-size: 1.5rem;
		color: #000000;
		margin-right: 8rem;
	}

	ul {
		display: flex;
		gap: 4rem;
		padding: 0;
		margin: 0 0 4px 0;

		a {
			margin-top: 14px;
			color: gray;
			font-size: 1.15rem;
			font-weight: 500;
			text-transform: uppercase;
			text-decoration: none;
			transition: all 0.3s;
			border-bottom: 2px solid transparent;

			&:hover {
				border-color: #000000;
			}

			&.active {
				color: #000000;
				font-weight: 700;
			}
		}

		button {
			margin-top: 4px;
		}
	}
`;

export const GroupCreateBtn = styled.div`
	button {
		font-size: 1.15rem;
		font-weight: 700;
		color: #ffffff;
		background-color: #313131;
		border-radius: 50px;
		padding: 0.8rem 1.5rem;
		transition: all 0.3s;
		&:hover {
			color: lightgray;
		}
	}
`;
