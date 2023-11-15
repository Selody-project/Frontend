import styled from "styled-components";

export const LandingMainContainerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 4rem);
	color: #fff;

	.left {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 50%;
			max-width: 100%;
		}
	}

	.right {
		flex: 1;
		padding: 50px;
		font-family: "Poppins", sans-serif;

		h1 {
			font-size: 2.5rem;
			margin-bottom: 2rem;
			line-height: 1.3;
		}

		.typing-animation {
			font-size: 1.25rem;
			margin-bottom: 4rem;
			// height: 150px;
			line-height: 1.3;
			height: 3.75rem;
			// overflow: hidden;
		}

		.auth-btn {
			font-size: 1.25rem;
			color: #6c55fe;
			background-color: #fff;
			padding: 1rem 2rem;
			border-radius: 0.25rem;
			transition: background-color 0.3s ease, color 0.3s ease;
			text-decoration: none;

			&:hover {
				color: #fff;
				background-color: #6c55fe;
			}
		}
	}
`;
