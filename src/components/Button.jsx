import styled, { css } from "styled-components";

const getSizeStyles = ({
	width,
	height,
	color,
	backgroundColor,
	fontSize = 14,
	fontWeight = 400,
	border = 0,
	padding,
}) => {
	return css`
		width: ${width}px;
		height: ${height}px;
		font-weight: ${fontWeight};
		font-size: ${fontSize}px;
		border: ${border};
		color: ${color};
		background-color: ${backgroundColor};
		padding: ${padding};
	`;
};

const getArrowStyles = ({ arrow }) => {
	if (!arrow) return;
	return css`
		display: flex;
		align-items: center;
		justify-content: space-between;

		& span {
			width: 8px;
			height: 8px;
			border: solid #30374F;
			border-width: 0 1.5px 1.5px 0;
			transform: rotate(45deg) translateX(-4px);
			transition: transform 0.3s ease;

			&.active {
				transform: rotate(225deg);
			}
		}
	`;
};

const StyledButton = styled.button`
	font-weight: ${({ theme }) => theme.typography.weight.common};
	cursor: pointer;

	${(props) => getSizeStyles(props)}
	${(props) => getArrowStyles(props)}
`;

export const Button = ({ label, ...rest }) => {
	if (rest.arrow) {
		return (
			<StyledButton {...rest}>
				{label}
				<span></span>
			</StyledButton>
		);
	}
	return <StyledButton {...rest}>{label}</StyledButton>;
};
