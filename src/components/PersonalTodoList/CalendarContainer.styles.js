import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	margin-bottom: 2rem;

	.calendar {
		width: 90%;
		margin: 0 auto;
		margin-bottom: 2rem;

		.fc-daygrid-day {
			border-color: black;
		}
		.fc-header-toolbar {
			margin-left: 5rem;
		}
		.fc-header-toolbar .fc-button-group {
			background-color: rgba(0, 0, 0, 0.1);
			border-radius: 20px;
			padding: 5px;
			overflow: hidden;
		}
		.fc-header-toolbar .fc-button {
			background-color: transparent;
			border: none;
			color: rgba(0, 0, 0, 0.5);
			margin: 0;
			border-radius: 15px;
			box-shadow: none;
		}
		.fc-header-toolbar .fc-button.fc-button-active {
			background-color: white;
			color: black;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		}
		.fc-day-sun .fc-col-header-cell-cushion {
			color: red;
		}

		.fc-col-header-cell-cushion {
			color: black;
		}
		.fc-daygrid-day-number {
			color: #000;
			padding: 10px;
		}
		.fc-day-today {
			background-color: transparent;
		}
		.fc-day-today .fc-daygrid-day-number {
			position: relative;
		}
		.fc-day-today .fc-daygrid-day-number::before {
			position: absolute;
			content: "";
			z-index: -1;
			top: 3px;
			right: 3px;
			background-color: #85a0ff;
			width: 30px;
			height: 30px;
			border-radius: 50%;
		}

		.fc-daygrid-day-frame {
			border-bottom: 1px solid lightgrey;
			margin-bottom: 5px;
			padding-bottom: 5px;
		}

		.fc-daygrid-day {
			border-color: black;
		}
	}

	.date-selector {
		position: absolute;
		top: 0px;
		left: 35px;
		z-index: 1000;
	}

	.date-dropdown {
		padding: 0.7rem 1rem;
		background-color: white;
		border: 1px solid black;
		border-radius: 14px;
	}
`;
