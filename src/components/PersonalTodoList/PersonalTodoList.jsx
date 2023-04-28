import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMenuToggle } from '../../store/user/user-slice';
import ModalWindow from './Modal/Modal';
import {
  TodoContainer,
  TodoHeader,
  TodoTabs,
  TodoTab,
  AddEventButton,
  TodoBody,
  TodoTitle,
  TodoSubtitle,
  TodoList,
  TodoItem,
} from './PersonalTodoList.styles';

const PersonalTodoList = () => {
  const [selectedTab, setSelectedTab] = useState(false);
  const menuOpen = useSelector((state) => state.user.menuOpen);
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(handleMenuToggle());
  };

  return (
    <>
      <TodoContainer>
        <TodoHeader>
          <TodoTabs>
            <TodoTab
              selected={selectedTab === false}
              onClick={() => setSelectedTab(false)}
            >
              오늘 할 일
            </TodoTab>
            <TodoTab
              selected={selectedTab === true}
              onClick={() => setSelectedTab(true)}
            >
              예정
            </TodoTab>
          </TodoTabs>
        </TodoHeader>
        <TodoBody>
          <TodoTitle>
            오늘의 할 일
            <AddEventButton onClick={handleMenuOpen}>
              <img src="/todo_add.svg" alt="Add-icon" />
              일정추가
            </AddEventButton>
          </TodoTitle>
          <TodoSubtitle>하루동안의 할 일을 관리합니다.</TodoSubtitle>
          <TodoList>
            <TodoItem>Item 1</TodoItem>
            <TodoItem>Item 2</TodoItem>
          </TodoList>
        </TodoBody>
      </TodoContainer>
      {menuOpen && <ModalWindow />}
    </>
  );
};

export default PersonalTodoList;
