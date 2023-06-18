import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import BaseCard from "../Base/BaseCard.jsx";
import { Wrapper } from "./PersonalTodoItem.styles.js";
import { useDispatch } from "react-redux";
import { deleteSchedule } from "@/features/schedule/schedule-service.js";
import { handleMenuToggle, setEdit } from "@/features/user/user-slice.js";
import { setId } from "@/features/schedule/schedule-slice.js";

const PersonalTodoItem = ({ schedule }) => {
	const dispatch = useDispatch();

	let sDate, sTime, eDate, eTime, uDate, uTime;
	let recDay;

	if (schedule.recurrence === 0) {
		[sDate, sTime] = schedule.startDateTime.split("T");
		[eDate, eTime] = schedule.endDateTime.split("T");
	} else {
		if (schedule.freq === "DAILY") {
			recDay = "매일";
		} else if (schedule.freq === "WEEKLY") {
			recDay = "매주";
		} else if (schedule.freq === "MONTHLY") {
			recDay = "매월";
		} else if (schedule.freq === "YEARLY") {
			recDay = "매년";
		}
		console.log(recDay);
		[uDate, uTime] = schedule.until.split("T");
	}

	const menuHandler = () => {
		dispatch(setEdit(true));
		dispatch(handleMenuToggle());
		dispatch(setId(schedule.id));
	};

	return (
		<BaseCard>
			<Wrapper>
				<div className="info">
					<h3>
						{schedule.title.length > 10
							? `${schedule.title.substring(0, 10)}...`
							: schedule.title}
					</h3>
					{schedule.recurrence === 0 && (
						<p className="date">
							시작 : {`${sDate} - ${sTime.replace(".000Z", "")}`}
							<br />
							종료 : {`${eDate} - ${eTime.replace(".000Z", "")}`}
						</p>
					)}
					{schedule.recurrence === 1 && (
						<p className="date">
							{`${uDate}까지 ${recDay} ${uTime.replace(".000Z", "")}`}
						</p>
					)}
				</div>
				<div className="icon">
					<AiOutlineEdit onClick={menuHandler} />
					<AiOutlineDelete
						onClick={() => dispatch(deleteSchedule(schedule.id))}
					/>
				</div>
			</Wrapper>
		</BaseCard>
	);
};

export default PersonalTodoItem;
