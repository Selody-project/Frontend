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
  TodoButton,
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
          <TodoButton onClick={handleMenuOpen}>
            아직 추가된 일정이 없습니다! <br />할 일을 추가하여 하루동안 할 일을
            관리해보세요.
          </TodoButton>
        </TodoBody>
      </TodoContainer>
      {menuOpen && <ModalWindow />}
    </>
  );
};

export default PersonalTodoList;
