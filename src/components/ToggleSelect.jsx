import styled from "styled-components";
import { Select } from "./Select";
import PropTypes, { nominalTypeHack } from "prop-types";

/**
 * 회의 일정을 선택하는 토글 박스
 */
export const ToggleSelect = (props) => {
	return (
		<Wrapper isSelected={props.isSelected}>
			<Select {...props} />
			{props.isArrow ? (
				<DescList descs={props.descs} isSelected={props.isSelected} />
			) : (
				""
			)}
		</Wrapper>
	);
};

const DescList = ({ descs, isSelected }) => {
	return (
		<StyledDescList isSelected={isSelected}>
			{descs.map(({ title, desc }) => {
				return (
					<>
						<li>
							{title}
							{desc ? (
								<ul>
									{desc.map(({ title }) => {
										return <li>{title}</li>;
									})}
								</ul>
							) : (
								""
							)}
						</li>
					</>
				);
			})}
		</StyledDescList>
	);
};

const Wrapper = styled.div`
	border: ${(props) => (props.isSelected ? "1px solid black" : "")};
	& > div {
		${({ isSelected }) =>
			isSelected
				? `
      border-top: none;
      border-left: none;
      border-right: none;
    `
				: ""}
	}
`;

const StyledDescList = styled.ul`
	display: ${(props) => (props.isSelected ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	padding-top: 19.5px;
	padding-bottom: 26px;
	padding-left: 25px;
	gap: 15px;
	border: none;
	font-size: 12px;
	font-weight: 400;
	line-height: 15px;
	color: #575b6a;

	& > li::before {
		content: "•";
		width: 4px;
		height: 4px;
		margin-right: 4px;
	}

	& ul {
		margin-top: 8px;
		font-size: 10px;
		line-height: 12px;
		color: #979daf;

		li {
			padding-left: 8px;
		}
	}
`;

ToggleSelect.propTypes = {
	/**
	 * 일정 제목
	 */
	label: PropTypes.string.isRequired,
	/**
	 * 일시
	 */
	desc: PropTypes.string,
	/**
	 * 드롭다운인지 체크박스인지
	 */
	isArrow: PropTypes.bool.isRequired,
	/**
	 * 드롭다운이라면 상세 설명 필수
	 */
	descs: PropTypes.array.isRequired,
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
	 * 테두리부터 얼마만큼 떨어져있는지
	 */
	padding: PropTypes.string,
	/**
	 * 테두리 설정
	 */
	border: PropTypes.string,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

ToggleSelect.defaultProps = {
	label: "월요일 회의",
	desc: "4월 10일 오후 02:00 ~ 오후 04:00",
	isArrow: true,
	descs: [
		{ title: "프로젝트 일정 및 아이디어 회의" },
		{
			title: "예상 참여 가능 인원",
			desc: [{ title: "팀원 A, 팀원 B, 팀원 C, 팀원 D" }],
		},
	],
	fontSize: 14,
	fontWeight: 400,
	color: "black",
	backgroundColor: "white",
	onClick: null,
	border: "1px solid #C9CCD7",
	padding: "15px 20px 14.5px 25px",
};
