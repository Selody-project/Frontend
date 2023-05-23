import styled, { css } from "styled-components";
import { ReactComponent as UnderArrow } from "../img/UnderArrow.svg";
import { PropTypes } from "prop-types";

const getStyles = ({
	width,
	height,
	fontSize,
	fontWeight,
	color,
	backgroundColor,
	marginLeft,
	border,
}) => {
	return css`
		width: ${width}px;
		height: ${height}px;
		font-size: ${fontSize}px;
		font-weight: ${fontWeight};
		color: ${color};
		background-color: ${backgroundColor};
		border: ${border};
		& svg {
			margin-left: ${marginLeft}px;
		}
	`;
};

const StyledSelect = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	${(props) => getStyles(props)}
`;

/**
 * 드롭다운으로 요소를 나타내는 Select 컴포넌트
 */
export const Select = ({ label, ...props }) => {
	return (
		<StyledSelect {...props}>
			{label}
			<UnderArrow />
		</StyledSelect>
	);
};

Select.propTypes = {
	/**
	 * 글자(내용)
	 */
	label: PropTypes.string.isRequired,
	/**
	 * 너비
	 */
	width: PropTypes.number,
	/**
	 * 높이
	 */
	height: PropTypes.number,
	/**
	 * 글자 크기
	 */
	fontSize: PropTypes.number,
	/**
	 * 글자 두꼐
	 */
	fontWeight: PropTypes.number,
	/**
	 * 글자 색상
	 */
	color: PropTypes.string,
	/**
	 * 배경 색상
	 */
	backgroundColor: PropTypes.string,
	/**
	 * 꺽쇠 위치
	 */
	marginLeft: PropTypes.number,
	/**
	 * 테두리 설정
	 */
	border: PropTypes.string,
};

Select.defaultProps = {
	fontSize: 14,
	fontWeight: 400,
	color: "black",
	backgroundColor: "white",
	border: "none",
};
