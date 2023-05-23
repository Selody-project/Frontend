import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const getStyles = ({
	color,
	backgroundColor,
	fontSize = 14,
	fontWeight = 400,
}) => {
	return css`
		font-weight: ${fontWeight};
		font-size: ${fontSize}px;
		color: ${color};
		background-color: ${backgroundColor};
	`;
};

const StyledButton = styled.button`
	width: 89px;
	height: 34px;
	${(props) => getStyles(props)}
`;

/**
 * 버튼 컴포넌트 디자인
 */
export const Button = ({ label, ...props }) => {
	return <StyledButton {...props}>{label}</StyledButton>;
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
};

Button.defaultProps = {
	backgroundColor: "#6C55FE",
	color: "white",
	onClick: null,
	fontWeight: 400,
	fontSize: 14,
};
