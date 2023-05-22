import styled, { css } from "styled-components";

const getSizeStyles = ({ width, height, color, backgroundColor }) => {
	return css`
		width: ${width}px;
		height: ${height}px;
		color: ${color};
		background-color: ${backgroundColor};
	`;
};

const StyledButton = styled.button`
	font-weight: ${({ theme }) => theme.typography.weight.common};
	border: 0;
	${(props) => getSizeStyles(props)}
	cursor: pointer;
`;

export const Button = ({ label, ...rest }) => (
	<StyledButton {...rest}>{label}</StyledButton>
);
