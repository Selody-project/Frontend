import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	margin-bottom: 2rem;

	.calendar {
		width: 90%;
		margin: 0 auto;
		margin-bottom: 2rem;

		a {
			text-decoration: none;
			color: #6c55fe;
		}

		.fc-today-button {
			background-color: #3f51b5;

			&:hover {
				background-color: #4f62c0;
			}
		}
	}
`;
