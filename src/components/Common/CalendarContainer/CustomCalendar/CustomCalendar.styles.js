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
			padding-left: ${({ isMonthly }) => (!isMonthly ? "45px" : 0)};
			display: flex;
			flex-direction: column;
			align-items: start;
			width: 100%;
			margin-bottom: 92px;
		}
		.fc-button-group {
			display: flex;
			gap: 20px;
			font-size: 17px;
			line-height: 21px;
			& > .fc-button {
				all: unset;
				&:focus {
					all: unset;
				}
				cursor: pointer;
				color: ${({
					theme: {
						colors: { disabled_text: disabledText },
					},
				}) => disabledText};
				&.fc-button-active {
					color: ${({
						theme: {
							colors: { text_01: text01 },
						},
					}) => text01};
				}
			}
		}
		.fc-daygrid-day-header {
			border: none;
		}
		.fc-daygrid-day-header {
			background-color: transparent;
			border: none;
		}
	}
	// border 초기화
	.fc-scrollgrid.fc-scrollgrid-liquid,
	.fc-theme-standard td,
	.fc-theme-standard th {
		border: none;
	}
	.fc-col-header-cell.fc-day {
		color: ${({ theme }) => theme.colors.disabled_text};
		&.fc-day-sun {
			color: ${({ theme }) => theme.colors.sunday};
		}
		&.fc-day-sat {
			color: ${({ theme }) => theme.colors.saturday};
		}
		padding-bottom: ${({ isMonthly }) => (isMonthly ? "33px" : "10px")};
		font-size: 17px;
		line-height: 21px;
		& .dateNum {
			color: ${({ theme: { colors } }) => colors.text_01};
			margin-top: 10px;
			width: 30px;
			height: 30px;
			line-height: 30px;
			&.activated {
				color: ${({ theme: { colors } }) => colors.white};
				border-radius: 50%;
				background-color: ${({ theme: { colors } }) => colors.primary};
			}
		}
	}
	// 날짜를 왼쪽 상단에 위치
	.fc .fc-daygrid-day-top {
		flex-direction: row;
		& > a {
			padding: 9px 0 0 9px;
		}
	}
	// border
	.fc-day.fc-daygrid-day {
		border: 1px solid ${({ theme }) => theme.colors.disabled_text};
	}
	.fc-theme-standard .fc-timegrid-slots tr > td {
		border: 1px solid ${({ theme }) => theme.colors.disabled_text};
	}
	.fc .fc-scrollgrid-section-body table {
		border-style: solid;
	}
	.fc-theme-standard .fc-timegrid-slots tr > td {
		&:first-child {
			display: ${({ isMonthly }) => (!isMonthly ? "inline-block" : undefined)};
			border: ${({ isMonthly }) => (!isMonthly ? "none" : undefined)};
			font-size: ${({ isMonthly }) => (!isMonthly ? "12px" : "inherit")};
			font-weight: ${({ isMonthly }) => (!isMonthly ? 500 : "inherit")};
			padding-right: ${({ isMonthly }) => (!isMonthly ? "13px" : 0)};
		}
		height: ${({ isMonthly }) => (!isMonthly ? "60px" : "93px")};
	}

	.fc-scroller-harness > .fc-scroller {
		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.fc-scroller-harness-liquid > .fc-scroller {
		&.fc-scroller-liquid-absolute {
			&::-webkit-scrollbar {
				display: none;
			}
			-ms-overflow-style: none;
			scrollbar-width: none;
		}
	}
`;

export const TitleSelect = styled.select`
	position: absolute;
	top: 35px;
	left: ${({ isMonthly }) => (!isMonthly ? "45px" : 0)};
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	font-size: 23px;
	font-family: Inter;
	padding-right: 20px;
	background-image: url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23121127' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
	background-size: 12px 6px;
	background-position: right;
	background-repeat: no-repeat;
	cursor: pointer;
	&:focus {
		outline: none;
	}
`;
