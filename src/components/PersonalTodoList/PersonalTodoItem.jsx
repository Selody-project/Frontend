import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import BaseCard from "../Base/BaseCard.jsx";
import { Wrapper as TodoItemWrapper } from "./PersonalTodoItem.styles.js";
import { useDispatch } from "react-redux";
import { deleteSchedule } from "@/features/schedule/schedule-service.js";
import { handleMenuToggle, setEdit } from "@/features/user/user-slice.js";
import { setId } from "@/features/schedule/schedule-slice.js";

const PersonalTodoItem = ({ schedule }) => {
	const dispatch = useDispatch();

	let sDate, sTime, eDate, eTime, uDate, uTime;

	if (schedule.recurrence === 0) {
		[sDate, sTime] = schedule.startDateTime.split("T");
		[eDate, eTime] = schedule.endDateTime.split("T");
	} else {
		[uDate, uTime] = schedule.until.split("T");
	}

	const menuHandler = () => {
		dispatch(setEdit(true));
		dispatch(handleMenuToggle());
		dispatch(setId(schedule.id));
	};

	return (
		<BaseCard>
			<TodoItemWrapper>
				<div className="info">
					<h3>{schedule.title}</h3>
					{schedule.recurrence === 0 && (
						<p>
							<span>{`${sDate} - ${sTime.replace(".000Z", "")}`}</span>
							<br />
							<span>{`${eDate} - ${eTime.replace(".000Z", "")}`}</span>
						</p>
					)}
					{schedule.recurrence === 1 && (
						<p>
							~ <span>{`${uDate} - ${uTime.replace(".000Z", "")}`}</span>
						</p>
					)}
				</div>
				<div className="icon">
					<MdEdit onClick={menuHandler} />
					<MdDelete onClick={() => dispatch(deleteSchedule(schedule.id))} />
				</div>
			</TodoItemWrapper>
		</BaseCard>
	);
};

export default PersonalTodoItem;
