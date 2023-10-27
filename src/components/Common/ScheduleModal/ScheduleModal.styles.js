import styled from "styled-components";

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

export const DateInput = styled.input`
	border: none;
	position: relative;
	display: block;
	background: ${({ theme: { colors } }) => colors.bg_01};
	&[type="date"] {
		width: 127px;
	}
	&[type="time"] {
		width: 107px;
	}
	height: 33px;
	padding: 0 10px;
	&::-webkit-calendar-picker-indicator {
		cursor: pointer;
		position: absolute;
		opacity: 0;
		width: 100%;
	}
`;

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
