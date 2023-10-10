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
	margin-bottom: 39px;
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
	position: absolute;
	right: 0;
	height: 15px;
	bottom: -24px;
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
	gap: 12px;
	flex-direction: column;
	margin-bottom: 24px;
	& > div:first-child {
		display: flex;
		gap: 20px;
		& > div {
			display: flex;
			flex-direction: column;
		}
	}
`;

export const WeeklyDatePickerDiv = styled.div`
	bottom: -100%;
	display: flex;
	justify-content: space-between;
	width: 196px;
	font-size: ${({
		theme: {
			typography: { size },
		},
	}) => size.s1};
	& > label {
		&,
		& > input {
			cursor: pointer;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		accent-color: ${({ theme: { colors } }) => colors.primary};
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
