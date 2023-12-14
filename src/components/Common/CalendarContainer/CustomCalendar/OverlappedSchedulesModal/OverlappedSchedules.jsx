import React, { forwardRef } from "react";

import ScheduleItem from "@/components/ScheduleItemList/ScheduleItem/ScheduleItem";

import { ContainerDiv, RelativeDiv } from "./OverlappedSchedules.styles";

const OverlappedSchedulesModal = forwardRef(
	({ schedules, position }, modalRef) => {
		return (
			<ContainerDiv ref={modalRef} position={position}>
				<RelativeDiv>
					{schedules.map((schedule) => (
						<ScheduleItem
							key={
								schedule.recurrence
									? schedule.startDateTime + schedule.id
									: schedule.id
							}
							schedule={schedule}
						/>
					))}
					{/* <div className="arrow" /> */}
				</RelativeDiv>
			</ContainerDiv>
		);
	},
);

export default OverlappedSchedulesModal;
