import React from "react";

import CalendarContainer from "@/components/Common/CalendarContainer/CalendarContainer";
import ScheduleItemList from "@/components/ScheduleItemList/ScheduleItemList";
import { SCHEDULE_TYPE } from "@/constants/calendarConstants";

import { LayoutMain } from "./PersonalSchedulePage.styles";

const PersonalSchedulePage = () => {
	return (
		<LayoutMain>
			<CalendarContainer type={SCHEDULE_TYPE.PERSONAL} />
			<ScheduleItemList />
		</LayoutMain>
	);
};

export default PersonalSchedulePage;
