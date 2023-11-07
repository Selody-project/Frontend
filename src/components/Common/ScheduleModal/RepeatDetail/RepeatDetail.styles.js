import styled from "styled-components";

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
