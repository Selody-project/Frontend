import styled from "styled-components";
import { Button } from "@components/Button";
import { Select } from "@components/Select";
import { blind } from "@styles/blind";
import { ReactComponent as LinkIcon } from "@/img/LinkIcon.svg";
import { ToggleSelect } from "../ToggleSelect";

const desc = [
	{
		title: "프로젝트 일정 및 아이디어 회의1234",
	},
	{
		title: "프로젝트 일정 및 아이디어 회의",
		desc: [{ title: "팀원 A, 팀원 B, 팀원 C, 팀원 D" }],
	},
];

const Main = () => {
	return (
		<Wrapper>
			<TimeList>
				<li className="active">월별</li>
				<li>리스트</li>
			</TimeList>
			<MainWrapper>
				<CalendarWrapper>
					<CalendarHeader>
						<Select label="2023년 4월" fontSize={23} width={145} height={28} />
						<CalendarOptionsWrapper>
							<UserLists>
								<li>
									<span>user1</span>
								</li>
								<li>
									<span>user2</span>
								</li>
								<li>
									<span>user3</span>
								</li>
								<li>
									<span>user4</span>
								</li>
							</UserLists>
							<Button
								label={"사용자 초대"}
								backgroundColor={"#9B9FAA"}
								width={89}
								height={33}
								fontWeight={500}
							/>
							<Select
								label={"그룹 A"}
								color={"#30374F"}
								width={137}
								height={33}
								border={"1px solid #C9CCD7"}
								padding="0 11px 0 10px"
							/>
						</CalendarOptionsWrapper>
					</CalendarHeader>
					<CalendarDateHeader>
						<p>일</p>
						<p>월</p>
						<p>화</p>
						<p>수</p>
						<p>목</p>
						<p>금</p>
						<p>토</p>
					</CalendarDateHeader>
					<CalendarBody>
						<div>
							<div className="day">
								<p>1</p>
							</div>
							<div className="day">
								<p>2</p>
							</div>
							<div className="day">
								<p>3</p>
							</div>
							<div className="day">
								<p>4</p>
							</div>
							<div className="day">
								<p>5</p>
							</div>
							<div className="day">
								<p>6</p>
							</div>
							<div className="day">
								<p>7</p>
							</div>
						</div>
						<div>
							<div className="day">
								<p>1</p>
							</div>
							<div className="day">
								<p>2</p>
							</div>
							<div className="day">
								<p>3</p>
							</div>
							<div className="day">
								<p>4</p>
							</div>
							<div className="day">
								<p>5</p>
							</div>
							<div className="day">
								<p>6</p>
							</div>
							<div className="day">
								<p>7</p>
							</div>
						</div>
					</CalendarBody>
					<PopuoGroup>
						<span className="title">그룹 A</span>
						<div className="code">
							<input
								type="text"
								placeholder="초대할 사용자 이메일 또는 코드 입력"
							/>
							<Button
								label={"초대"}
								backgroundColor="#292B33"
								width={60}
								height={39}
							/>
						</div>
						<div className="link">
							<span>링크로 사용자 초대</span>
							<Button
								label={`링크복사`}
								backgroundColor="transparent"
								color="#292B33"
								fontSize={12}
								fontWeight={500}
								height={21}
								lineHeight={15}
							>
								<LinkIcon />
							</Button>
						</div>
					</PopuoGroup>
				</CalendarWrapper>
				<ScheduleWrapper>
					<ScheduleOptionList>
						<li className="selected">일정 후보</li>
						<li>오늘 일정</li>
						<li>예정</li>
					</ScheduleOptionList>
					<ScheduleControlWrapper>
						<div className="textWrapper">
							<p className="title">일정 후보</p>
							<p className="desc">함께 일정을 조율해보세요.</p>
						</div>
						<div className="buttonWrapper">
							<Button
								label={"일정 후보 추가"}
								width={109}
								height={32}
								fontWeight={500}
								backgroundColor={"#C9CCD7"}
							/>
							<Button
								label={"일정 후보 선택"}
								width={109}
								height={32}
								fontWeight={500}
								backgroundColor="#34363C"
							/>
						</div>
					</ScheduleControlWrapper>
					<EmptySheduleList>
						공유한 사용자들에게 일정 후보를
						<br /> 먼저 제안해보세요!
					</EmptySheduleList>
					<ScheduleList>
						<ToggleSelect
							isSelected={true}
							isArrow={true}
							descs={desc}
							label="월요일 회의"
							desc="4월 10일 오후 02:00 ~ 오후 04:00"
							padding="15px 20px 14.5px 25px"
							border="1px solid #C9CCD7"
						/>
						<ToggleSelect
							isSelected={false}
							descs={desc}
							label="월요일 회의"
							desc="4월 10일 오후 02:00 ~ 오후 04:00"
							padding="15px 20px 14.5px 25px"
							border="1px solid #C9CCD7"
						/>
					</ScheduleList>
				</ScheduleWrapper>
			</MainWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 21px 105px 0 76px;
`;

const TimeList = styled.ul`
	display: flex;
	gap: 20px;

	& li {
		font-weight: 400;
		line-height: 21px;
		color: #a3b2c3;
		cursor: pointer;

		&.active {
			color: black;
		}
	}
`;

const MainWrapper = styled.div`
	display: flex;
	margin-top: 14px;
	gap: 35px;
`;

const CalendarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const CalendarHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CalendarDateHeader = styled.div`
	margin-top: 46px;
	display: flex;
	align-items: center;
	justify-content: space-around;

	& p {
		font-size: 17px;
		font-weight: 400;
		line-height: 21px;
		color: #d1d3dc;

		&:first-child {
			color: #ff9797;
		}

		&:last-child {
			color: #85a0ff;
		}
	}
`;

const CalendarBody = styled.div`
	margin-top: 33px;

	& div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);

		& div {
			position: relative;
			width: 100%;
			height: 0;
			padding-top: 81.04%;
			background-color: white;
			border: 1px solid #c9ccd7;

			& p {
				position: absolute;
				left: 8px;
				top: 9px;
				font-size: 14px;
				line-height: 17px;
				font-weight: 400;
				color: black;
			}
		}
		&:not(:first-child) div {
			border-top: none;
		}
	}
`;

const CalendarOptionsWrapper = styled.ul`
	display: flex;
	gap: 14px;
`;

const UserLists = styled.ul`
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	align-items: center;
	margin-right: 6px;

	& li {
		width: 26px;
		height: 26px;
		border-radius: 50%;
		border: 1px solid #60c8c8;
		margin-right: -6px;
		background-color: #eff0f4;
		z-index: 1;

		span {
			${blind}
		}
	}
`;

const ScheduleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ScheduleOptionList = styled.ul`
	display: table;
	border-collapse: collapse;
	height: 33px;
	cursor: pointer;

	& li {
		display: table-cell;
		text-align: center;
		vertical-align: middle;

		box-sizing: border-box;
		width: 136px;
		background-color: white;
		color: #30374f;
		border: 1px solid #c9ccd7;
		&.selected {
			background-color: #c9ccd7;
			color: white;
			/* border: none; */
		}
	}
`;

const ScheduleControlWrapper = styled.div`
	display: flex;
	margin-top: 41px;
	align-items: flex-start;
	justify-content: space-between;

	& div.textWrapper {
		display: flex;
	}

	& p.title {
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		color: #313131;
	}

	& p.desc {
		font-size: 12px;
		font-weight: 400;
		line-height: 24px;
		color: #2f2f2f;
		margin-left: 13px;
	}

	& div.buttonWrapper {
		display: flex;
		flex-direction: column;
		gap: 27px;
	}
`;

const EmptySheduleList = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	line-height: 17px;
	font-size: 14px;
	color: #30374f;
	align-items: center;
	border: 1px solid #c9ccd7;
	height: 186px;
	margin-top: 27px;
	font-weight: 500;
`;

const ScheduleList = styled.ul`
	display: flex;
	flex-direction: column;
	margin-top: 15px;
	gap: 13px;
`;

const PopuoGroup = styled.div`
	/* position: absolute; */
	padding: 21px 20px 22px;
	background: #ffffff;
	border: 1px solid #c9ccd7;
	box-shadow: 2px 4px 8px #e7e9f0;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	font-weight: 500;
	line-height: 17px;
	width: 421px;

	span.title {
		color: #30374f;
	}

	div.code {
		display: flex;
		gap: 7px;
		margin-top: 16px;
		align-items: center;
		input {
			height: 39px;
			flex: 1;
			box-sizing: border-box;
			padding-left: 10px;
			background-color: #f4f6fc;
			border: none;

			&::placeholder {
				color: #9ca0ab;
			}
		}
	}

	div.link {
		display: flex;
		font-size: 12px;
		line-height: 15px;
		align-items: center;
		margin-top: 13px;
		border: 1px solid #ebedf3;
		padding: 8px 10px;

		span {
			color: #9ca0ab;
			flex: 1;
		}
	}
`;

export default Main;
