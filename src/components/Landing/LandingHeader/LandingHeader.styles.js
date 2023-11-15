import styled from "styled-components";

export const LandingHeaderContainerDiv = styled.div`
	margin-top: -1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 2rem 0 2rem;
	height: 5rem;
	max-width: 100vw;

	a {
		text-decoration: none;
	}

	h1 {
		font-size: 2.5rem;
		color: #ffffff;
	}

	.menu {
		a {
			color: #ffffff;
			margin: 0 1rem;
			padding-bottom: 0.5rem;
			font-size: 1.15rem;
			font-weight: 500;
			text-transform: uppercase;
			transition: all 0.3s;
			border-bottom: 2px solid transparent;
			&:hover {
				color: #ffffff;
				border-color: #ffffff;
			}
		}
	}

	.auth-btn {
		a {
			font-size: 1.25rem;
			font-weight: 700;
			color: #ffffff;
			transition: all 0.3s;
			&:hover {
				color: #ffffff;
			}
		}
	}
`;
