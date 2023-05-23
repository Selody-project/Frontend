import styled from "styled-components";
import { Calendar } from "react-calendar";
import { Button } from "../Button";

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
						<Button
							label={"2023년 4월"}
							backgroundColor={"transparent"}
							fontSize={23}
							arrow={true}
							width={145}
							height={28}
						/>
						<CalendarOptionsWrapper>
							<UserLists />
							<Button
								label={"사용자 초대"}
								backgroundColor={"#9B9FAA"}
								color={"white"}
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
				</CalendarWrapper>
				<ScheduleWrapper>
					<ScheduleList>
						<li className="selected">일정 후보</li>
						<li>오늘 일정</li>
						<li>예정</li>
					</ScheduleList>
					<ScheduleControlWrapper>
						<div className="textWrapper">
							<p className="title">일정 후보</p>
							<p className="desc">함께 일정을 조율해보세요.</p>
						</div>
						<div className="buttonWrapper">
							<button className="add">일정 후보 추가</button>
							<button className="select">일정 후보 선택</button>
						</div>
					</ScheduleControlWrapper>
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

const CalendarOptionsWrapper = styled.ul`
	display: flex;
	gap: 14px;
`;

const UserLists = styled.ul``;

const ScheduleWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ScheduleList = styled.ul`
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

		& button {
			width: 121px;
			height: 32px;
			color: #ffffff;
			
			&.add {
				font-size: 14px;
				background-color: #c9ccd7;
			}

			&.select {
				font-size: 12px;
				background-color: #34363c;
			}
		}
	}
`;

export default Main;
