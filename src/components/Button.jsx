import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const getStyles = ({
	color,
	backgroundColor,
	fontSize,
	fontWeight,
	width,
	height,
	lineHeight,
}) => {
	return css`
		font-weight: ${fontWeight};
		font-size: ${fontSize}px;
		color: ${color};
		background-color: ${backgroundColor};
		width: ${width}px;
		height: ${height}px;
		line-height: ${lineHeight}px;

		& svg {
			margin-right: 7.67px;
		}
	`;
};

const StyledButton = styled.button`
	${(props) => getStyles(props)}
	display: flex;
	justify-content: center;
	align-items: center;
`;

/**
 * 버튼 컴포넌트 디자인
 */
export const Button = ({ label, children, ...props }) => {
	return (
		<StyledButton {...props}>
			{children}
			{label}
		</StyledButton>
	);
};

Button.propTypes = {
	/**
	 * 배경색 지정
	 */
	backgroundColor: PropTypes.string,
	/**
	 * 글자색 지정
	 */
	color: PropTypes.string,
	/**
	 * 내용
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
	/**
	 * 내용 크기
	 */
	fontSize: PropTypes.number,
	/**
	 * 내용 두께
	 */
	fontWeight: PropTypes.number,
	/**
	 * 너비
	 */
	width: PropTypes.number,
	/**
	 * 높이
	 */
	height: PropTypes.number,
};

Button.defaultProps = {
	backgroundColor: "#6C55FE",
	color: "white",
	onClick: null,
	fontWeight: 400,
	fontSize: 14,
	width: 89,
	height: 34,
};
