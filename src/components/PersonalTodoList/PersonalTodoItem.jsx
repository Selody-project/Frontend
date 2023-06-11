import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdCheck, MdEdit, MdDelete } from "react-icons/md";
import BaseCard from "../Base/BaseCard.jsx";
import { Wrapper as TodoItemWrapper } from "./PersonalTodoItem.styles.js";
import { createSchedule } from "@/features/schedule/schedule-service.js";

const PersonalTodoItem = ({ schedule }) => {
	const dispatchFn = useDispatch();

	const [isChecked, setIsChecked] = useState(false);
	const checkHandler = () => {
		setIsChecked((prevState) => {
			const newState = !prevState;
			if (newState) {
				// 체크박스가 체크되었을 때만 액션을 디스패치합니다.
				dispatchFn(createSchedule(schedule));
			}
			return newState;
		});
	};

	// submitHandler는 이제 필요없으므로 삭제할 수 있습니다.

	return (
		<BaseCard>
			<TodoItemWrapper checked={isChecked}>
				<input
					type="checkbox"
					className="check"
					checked={isChecked}
					onChange={checkHandler}
				/>
				{isChecked && <MdCheck color="#fff" />}
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
