import styled, { css } from "styled-components";
import { ReactComponent as UnderArrow } from "../img/UnderArrow.svg";
import PropTypes from "prop-types";

/**
 * 드롭다운으로 요소를 나타내는 Select 컴포넌트
 */
export const Select = ({ label, desc, isArrow, isSelected, ...props }) => {
	return (
		<StyledSelect {...props}>
			<Labels label={label} desc={desc} />
			{isArrow ? (
				<UnderArrow className={isSelected ? "active" : ""} />
			) : (
				<Circle className={isSelected ? "active" : ""} />
			)}
		</StyledSelect>
	);
};

const Labels = ({ label, desc }) => {
	return (
		<div className="labelWrapper">
			<p>{label}</p>
			<p>{desc}</p>
		</div>
	);
};

const getStyles = ({
	width,
	height,
	fontSize,
	fontWeight,
	color,
	backgroundColor,
	padding,
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
		padding: ${padding};
	`;
};

const StyledSelect = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	& .labelWrapper {
		line-height: 17px;
	}

	& svg {
		/* transform: rotate(45deg) translateX(-4px); */
		transition: transform 0.3s ease;

		&.active {
			transform: rotate(180deg);
		}
	}

	${(props) => getStyles(props)}
`;

const Circle = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 1px solid #c9ccd7;
	display: flex;
	justify-content: center;
	align-items: center;

	&.active {
		border-color: #313131;

		&::before {
			display: block;
			content: "";
			width: 14px;
			height: 14px;
			border-radius: 50%;
			background-color: #313131;
		}
	}
`;

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
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Select.defaultProps = {
	fontSize: 14,
	fontWeight: 400,
	color: "black",
	backgroundColor: "white",
	border: "none",
	onClick: null,
};
