import styled, { css } from "styled-components";
import { number, string } from "prop-types";
import { ReactComponent as UnderArrow } from "../img/UnderArrow.svg";

const getStyles = ({
	width,
	height,
	fontSize,
	fontWeight,
	color,
	backgroundColor,
	marginRight,
}) => {
	return css`
		width: ${width}px;
		height: ${height}px;
		font-size: ${fontSize}px;
		font-weight: ${fontWeight};
		color: ${color};
		background-color: ${backgroundColor};
		margin-right: ${marginRight}px;
	`;
};

const StyledSelect = styled.div`
	display: flex;
	align-items: center;
	${(props) => getStyles(props)}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

/**
 * 드롭다운으로 요소를 나타내는 Select 컴포넌트
 */
export const Select = ({ label, arrowWidth, arrowHeight, ...props }) => {
	return (
		<Wrapper>
			<StyledSelect {...props}>{label}</StyledSelect>
			<UnderArrow />
		</Wrapper>
	);
};

Select.prototype = {
	/**
	 * 글자(내용)
	 */
	label: string.isRequired,
	/**
	 * 너비
	 */
	width: number,
	/**
	 * 높이
	 */
	height: number,
	/**
	 * 글자 크기
	 */
	fontSize: number,
	/**
	 * 글자 두꼐
	 */
	fontWeight: number,
	/**
	 * 글자 색상
	 */
	color: string,
	/**
	 * 배경 색상
	 */
	backgroundColor: string,
};

Select.defaultProps = {
	fontSize: 14,
	fontWeight: 400,
	color: "black",
	backgroundColor: "white",
};
