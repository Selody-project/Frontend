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

export default Main;
