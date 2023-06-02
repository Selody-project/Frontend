import React, { useState } from "react";
import BaseCard from "../Base/BaseCard.jsx";

import { MdCheck, MdEdit, MdDelete } from "react-icons/md";
import { Wrapper as TodoItemWrapper } from "./PersonalTodoItem.styles.js";

const PersonalTodoItem = ({ schedule }) => {
	const [isChecked, setIsChecked] = useState(false);
	const checkHandler = () => {
		setIsChecked((prevState) => !prevState);
	};

	return (
		<BaseCard>
			<TodoItemWrapper checked={isChecked}>
				<div className="check" onClick={checkHandler}>
					{isChecked && <MdCheck color="#fff" />}
				</div>
				<div className="info">
					<h3>{schedule.title}</h3>
					<p>
						<span>{schedule.startDate}</span>
						<span>~</span>
						<span>{schedule.endDate}</span>
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
