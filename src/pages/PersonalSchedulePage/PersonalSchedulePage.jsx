import React from "react";
import { useSelector } from "react-redux";

import CalendarContainer from "@/components/Common/CalendarContainer/CalendarContainer";
import ScheduleModal from "@/components/Common/ScheduleModal/ScheduleModal";
import ScheduleItemList from "@/components/ScheduleItemList/ScheduleItemList";
import { SCHEDULE_TYPE, VIEW_TYPE } from "@/constants/calendarConstants";
import { UI_TYPE } from "@/constants/uiConstants";

import { LayoutMain } from "./PersonalSchedulePage.styles";

const PersonalSchedulePage = () => {
	const openedModal = useSelector(({ ui }) => ui.openedModal);
	const currentCalendarView = useSelector(
		({ schedule }) => schedule.currentCalendarView,
	);

	return (
		<>
			<LayoutMain isMonthly={currentCalendarView === VIEW_TYPE.DAY_GRID_MONTH}>
				<CalendarContainer type={SCHEDULE_TYPE.PERSONAL} />
				<ScheduleItemList />
			</LayoutMain>
			{openedModal === UI_TYPE.PERSONAL_SCHEDULE && (
				<ScheduleModal type={openedModal} />
			)}
		</>
	);
};

export default PersonalSchedulePage;
