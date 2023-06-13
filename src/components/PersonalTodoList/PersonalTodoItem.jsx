import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import BaseCard from "../Base/BaseCard.jsx";
import { Wrapper as TodoItemWrapper } from "./PersonalTodoItem.styles.js";

const PersonalTodoItem = ({ schedule }) => {
	const [sDate, sTime] = schedule.startDateTime.split("T");
	const [eDate, eTime] = schedule.endDateTime.split("T");

	return (
		<BaseCard>
			<TodoItemWrapper>
				<div className="info">
					<h3>{schedule.title}</h3>
					<p>
						<span>{`${sDate} - ${sTime.replace(".000Z", "")}`}</span>
						<br />
						<span>{`${eDate} - ${eTime.replace(".000Z", "")}`}</span>
					</p>
				</div>
				<div className="icon">
					<MdEdit />
					<MdDelete />
				</div>
			</TodoItemWrapper>
		</BaseCard>
	);
};

export default PersonalTodoItem;
