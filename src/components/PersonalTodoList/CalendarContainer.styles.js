import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 2rem;

	.calendar {
		width: 80%;
		height: 100%;
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
