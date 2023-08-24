import styled from "styled-components";

export const CustomCalendarDiv = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	margin: 0;
	width: 100%;
	.fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
		width: 100%;
		margin-bottom: 2rem;
		.fc-header-toolbar.fc-toolbar {
			margin: 0;
			display: flex;
			flex-direction: column;
			align-items: start;
			width: 100%;
			margin-bottom: 93px;
		}
		.fc-button-group {
			display: flex;
			gap: 20px;
			& > .fc-button {
				all: unset;
				&:focus {
					all: unset;
				}
				cursor: pointer;
				color: #9ca0ab; // disabled text
				&.fc-button-active {
					color: #121127; // text
				}
			}
		}
	}

	/* .calendar {
		width: 100%;
		margin: 0 auto;
		margin-bottom: 2rem; */
	// 툴바 레이아웃
	/* .fc-daygrid-day {
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
		} */
`;

export const TitleSelect = styled.select`
	position: absolute;
	top: 35px;
	left: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	font-size: 23px;
	font-family: Inter;
	padding-right: 12px;
	background-image: url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23121127' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
	background-size: 12px 6px;
	background-position: right;
	background-repeat: no-repeat;
	&:focus {
		outline: none;
	}
`;
