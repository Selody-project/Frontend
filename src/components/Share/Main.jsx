import styled from "styled-components";
import { Button } from "@components/Button";
import { Select } from "@components/Select";

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
						<Select
							label="2023년 4월"
							fontSize={23}
							marginRight={12}
							arrowWidth={12}
							arrowHeight={6}
						/>
						<CalendarOptionsWrapper>
							<UserLists />
							<Button
								label={"사용자 초대"}
								backgroundColor={"#9B9FAA"}
								width={89}
								height={33}
								fontWeight={500}
							/>
							<Button
								label={"그룹 A"}
								backgroundColor={"white"}
								color={"#30374F"}
								arrow={true}
								width={137}
								height={33}
								border={"1px solid #C9CCD7"}
								padding={"8px 10px"}
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
					<ScheduleList>
						<li>
							<div>
								<p>월요일 회의</p>
								<p>4월 10일 오후 02:00 ~ 오후 04:00</p>
							</div>
							<div className="arrow"></div>
						</li>
						<li>
							<div>
								<p>월요일 회의</p>
								<p>4월 10일 오후 02:00 ~ 오후 04:00</p>
							</div>
							<div className="arrow"></div>
						</li>
						<li>
							<div>
								<p>월요일 회의</p>
								<p>4월 10일 오후 02:00 ~ 오후 04:00</p>
							</div>
							<div className="arrow"></div>
						</li>
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
		&:not(:first-child) {
			margin-left: -1px;
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

const UserLists = styled.ul``;

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

const ScheduleList = styled.ul`
	display: flex;
	flex-direction: column;
	margin-top: 15px;
	gap: 13px;

	& li {
		display: flex;
		flex: 1;
		justify-content: space-between;
		align-items: center;
		padding: 15px 30px 14px 25px;
		border: 1px solid #c9ccd7;

		& div {
			display: flex;
			flex-direction: column;
			font-size: 14px;
			line-height: 17px;
			font-weight: 500;
			color: #30374f;
		}

		& .arrow {
			width: 8px;
			height: 8px;
			border: solid #30374f;
			border-width: 0 1.5px 1.5px 0;
			transform: rotate(45deg) translateX(-4px);
			transition: transform 0.3s ease;

			&.active {
				transform: rotate(225deg);
			}
		}
	}
`;

export default Main;
