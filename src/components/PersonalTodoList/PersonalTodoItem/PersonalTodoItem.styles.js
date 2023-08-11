import styled from "styled-components";

export const Wrapper = styled.form`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;

	.info {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;

		h3 {
			font-size: 1.15rem;
			font-weight: 700;
			padding-bottom: 0.3rem;
		}

		p {
			font-size: 0.9rem;
			font-weight: 400;
			color: black;
		}
	}
	.icon svg {
		margin-left: 0.5rem;
		color: #a495ff;
		font-size: 1.5rem;
		cursor: pointer;
	}
`;
