import React from 'react';
import Header from '../components/Header/Header';
import PersonalTodoList from '../components/PersonalTodoList/PersonalTodoList';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 100px 60px 0px 40px;
  font-family: 'Inter', sans-serif;
`;

// 임시 달력 컨테이너
const CalendarContainer = styled.div`
  width: 60%;
  background-color: black;
  height: 500px;
  min-width: 850px;
  max-width: 850px;
`;

const PersonalSchedulePage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <CalendarContainer />
        <PersonalTodoList data-testid="PersonalTodoList" />
      </MainContainer>
    </>
  );
};

export default PersonalSchedulePage;
