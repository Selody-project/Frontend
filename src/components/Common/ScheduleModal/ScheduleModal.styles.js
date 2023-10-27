import styled, { css } from "styled-components";

export const ScheduleModalLayoutDiv = styled.div`
	width: 100%;
	min-width: 590px;
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	font-family: "Inter", sans-serif;
	font-size: ${({ theme }) => theme.typography.size.s3};
	& input,
	& textarea {
		&:focus {
			outline: none;
		}
		color: ${({ theme }) => theme.colors.text_03};
		&,
		&::placeholder {
			font-family: "Inter", sans-serif;
			font-weight: ${({ theme }) => theme.typography.weight.medium};
		}
		&::placeholder {
			color: ${({ theme }) => theme.colors.disabled_text};
		}
	}
`;

export const TitleInput = styled.input`
	all: unset;
	width: 100%;
	height: 35px;
	margin-bottom: 24px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.text_01};
`;

export const DetailTextarea = styled.textarea`
	all: unset;
	resize: none;
	width: 100%;
	height: 109px;
	background-color: ${({ theme }) => theme.colors.bg_01};
	display: block;
	font-size: 16px;
	padding: 14px;
	margin-bottom: ${({ theme }) => theme.spacing.padding.medium}px;
	&::placeholder {
		color: ${({ theme }) => theme.colors.disabled_text};
	}
`;

export const InputLabel = styled.label`
	color: ${({ theme: { colors } }) => colors.text_01};
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s2};
	line-height: 17px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
	margin-bottom: 12px;
`;

export const DateContainerDiv = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
`;

export const DateDiv = styled.div`
	display: flex;
	gap: 15px;
	width: 45%;
`;

const defaultDateInputStyle = css`
	border: none;
	display: block;
	background: ${({ theme: { colors } }) => colors.bg_01};
	height: 33px;
	padding: 0 10px;
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.medium};
	cursor: pointer;
`;

export const DateInput = styled.input`
	${defaultDateInputStyle}
	position: relative;
	&[type="date"] {
		width: 127px;
	}
	&[type="time"] {
		width: 107px;
	}
	&::-webkit-calendar-picker-indicator {
		cursor: pointer;
		position: absolute;
		opacity: 0;
		width: 100%;
	}
`;

const DatePickerDiv = styled.div`
	// 필요없는 타이틀 제거
	& .react-datepicker__aria-live {
		display: none;
	}
	// datePicker 레이아웃
	& .react-datepicker {
		margin: 7px 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 264px;
		height: 260px;
		background-color: white;
		border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		& .react-datepicker__day-names {
			margin-bottom: 11px;
			width: 100%;
			height: 12px;
			display: flex;
			justify-content: space-around;
			font-size: 10px;
			color: ${({ theme: { colors } }) => colors.disabled_text};
			& > div {
				&:first-child {
					color: ${({ theme: { colors } }) => colors.sunday};
				}
				&:last-child {
					color: ${({ theme: { colors } }) => colors.saturday};
				}
			}
		}
		& .react-datepicker__month {
			display: flex;
			flex-direction: column;
			gap: 8px;
			font-size: 9px;
			color: ${({ theme: { colors } }) => colors.text_01};
			& > .react-datepicker__week {
				display: flex;
				justify-content: space-around;
				& > div {
					width: 15px;
					height: 15px;
					line-height: 15px;
					text-align: center;
					cursor: pointer;
					&.react-datepicker__day--outside-month,
					&.react-datepicker__day--disabled {
						color: ${({ theme: { colors } }) => colors.disabled_text};
					}
					&.react-datepicker__day--disabled {
						cursor: not-allowed;
					}
					&.react-datepicker__day--selected {
						background-color: ${({ theme: { colors } }) => colors.primary};
						border-radius: 50%;
						color: ${({ theme: { colors } }) => colors.white};
					}
				}
			}
		}
		& > .react-datepicker__children-container > footer {
			margin-bottom: 13px;
			padding: 0 14px;
			display: flex;
			justify-content: flex-end;
			& > button {
				width: 73px;
				height: 28px;
				border-radius: 5px;
				text-align: center;
				line-height: 28px;
				font-size: ${({
					theme: {
						typography: { size },
					},
				}) => size.s1};
				font-weight: ${({
					theme: {
						typography: { weight },
					},
				}) => weight.medium};
				cursor: pointer;
				&:first-child {
					color: ${({ theme: { colors } }) => colors.disabled_text};
				}
				&:last-child {
					color: ${({ theme: { colors } }) => colors.white};
					background-color: ${({ theme: { colors } }) => colors.primary};
				}
			}
		}
	}
`;

const CustomInputButton = styled.button`
	${defaultDateInputStyle}
	width: 127px;
	font-size: 13px;
	font-family: inherit;
`;

const CustomHeader = styled.header`
	display: flex;
	padding: 17px 14px 0 14px;
	margin-bottom: 15px;
	& > .spacer {
		flex: 1;
	}
	& > button {
		height: fit-content;
		cursor: pointer;
		&:disabled {
			display: none;
		}
		&.prev {
			margin-right: 20px;
		}
		& > span {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 12px;
			height: 12px;
		}
	}
`;

export const CustomDatePickerComponents = {
	DatePickerDiv,
	CustomInputButton,
	CustomHeader,
};

export const AllDayCheckBoxDiv = styled.div`
	margin-bottom: 12px;
	display: flex;
	justify-content: flex-end;
	& > label {
		height: 100%;
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: ${({
			theme: {
				typography: { size },
			},
		}) => size.s1};
		cursor: pointer;
		& > input {
			accent-color: ${({ theme: { colors } }) => colors.primary};
			cursor: pointer;
		}
	}
`;

export const RepeatContainerDiv = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
	margin-bottom: 24px;
	& > div {
		display: flex;
		gap: 15px;
		&:first-child > div {
			display: flex;
			flex-direction: column;
		}
		&:last-child > .interval_N {
			display: flex;
			gap: 6px;
			align-items: center;
			& > input[type="number"] {
				all: unset;
				border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
				width: 98px;
				height: 100%;
				padding: 8px 10px;
				color: ${({ theme: { colors } }) => colors.disabled_text};
				/* Chrome, Safari, Edge, Opera */
				&::-webkit-outer-spin-button,
				&::-webkit-inner-spin-button {
					-webkit-appearance: none;
					margin: 0;
				}
				appearance: textfield;
			}
			& > span {
				color: ${({ theme: { colors } }) => colors.text_03};
			}
		}
	}
`;

export const ByweekdayPickerDiv = styled.div`
	padding: 0 10px;
	display: flex;
	justify-content: space-between;
	width: 196px;
	height: 31px;
	font-size: 10px;
	& > label {
		&,
		& > div > input {
			cursor: pointer;
		}
		& > span,
		& > div {
			width: 100%;
			height: 12px;
		}
		& > span {
			text-align: center;
			line-height: 12px;
		}
		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
			& > input {
				display: block;
				margin: 0;
				width: 9px;
				height: 9px;
			}
		}
		display: flex;
		flex-direction: column;
		gap: 7px;
		align-items: center;
		width: 12px;
		accent-color: ${({ theme: { colors } }) => colors.primary};
		color: ${({ theme: { colors } }) => colors.disabled_text};
		&:first-child {
			color: ${({ theme: { colors } }) => colors.sunday};
		}
		&:last-child {
			color: ${({ theme: { colors } }) => colors.saturday};
		}
	}
`;

export const StyledSelect = styled.select`
	all: unset;
	cursor: pointer;
	padding: 8px 12px;
	background: url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23121127' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
		no-repeat right 10px center;
	border: 1px solid ${({ theme: { colors } }) => colors.disabled_text};
	width: 196px;
	height: 33px;
	line-height: 15px;
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s2};
	color: ${({ theme: { colors } }) => colors.text_03};
`;

export const FooterDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: ${({ isAllDayCheckboxDisplayed }) =>
		isAllDayCheckboxDisplayed ? 29 : 9}px;
	padding-bottom: 19px;
`;

export const SubmitButton = styled.button`
	display: block;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	background-color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.btn_02 : colors.btn_01};
	border-radius: 5px;
	color: white;
	width: 132px;
	height: 40px;
	text-align: center;
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s2};
	font-weight: ${({
		theme: {
			typography: { weight },
		},
	}) => weight.semibold};
`;
