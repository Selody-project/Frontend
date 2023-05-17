import React, { useState, useCallback } from 'react';
import {
  TodoItemContainer,
  TodoCheckbox,
  TodoContent,
  TodoTitle,
  TodoTime,
  EditButton,
  DeleteButton,
} from './TodoItem.styles';

const formatDate = (dateString) => {
  const dateWithoutYear = dateString.slice(5, 10);
  return dateWithoutYear.replace('-', '월') + '일';
};

const formatTime = (timeString) => {
  const hour = parseInt(timeString.slice(0, 2));
  const minute = timeString.slice(3, 5);
  const amPm = hour < 12 ? '오전' : '오후';
  const adjustedHour = hour % 12 || 12;
  return ` ${amPm} ${adjustedHour}:${minute}`;
};

const TodoItem = ({ todoData }) => {
  const { title, startDate, startTime, endDate, endTime } = todoData;

  const startDateFormatted = formatDate(startDate);
  const startTimeFormatted = formatTime(startTime);
  const endDateFormatted = formatDate(endDate);
  const endTimeFormatted = formatTime(endTime);

  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = useCallback(() => {
    setIsCompleted((prevIsCompleted) => !prevIsCompleted);
  }, []);

  return (
    <TodoItemContainer isCompleted={isCompleted}>
      <TodoCheckbox onClick={handleClick} />
      <TodoContent>
        <TodoTitle>{title}</TodoTitle>
        <TodoTime>
          {startDateFormatted}
          {startTimeFormatted} ~ {endDateFormatted}
          {endTimeFormatted}
        </TodoTime>
      </TodoContent>
      <EditButton
        disabled={isCompleted}
        onClick={() => {
          if (!isCompleted) {
            console.log('Edit button clicked!');
          }
        }}
      >
        <img src="/TodoListEditBtn.svg" alt="Logo" />
      </EditButton>
      <DeleteButton
        disabled={isCompleted}
        onClick={() => {
          if (!isCompleted) {
            console.log('Delete button clicked!');
          }
        }}
      >
        <img src="/TodoListDeleteBtn.svg" alt="Logo" />
      </DeleteButton>
    </TodoItemContainer>
  );
};

export default TodoItem;
