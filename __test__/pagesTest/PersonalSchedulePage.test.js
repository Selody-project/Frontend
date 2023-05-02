/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import userSlice from '../../src/store/user/user-slice';
import PersonalSchedulePage from '../../src/pages/PersonalSchedulePage';

jest.mock('@daypilot/daypilot-lite-react');

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

const renderWithRedux = (component) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};

describe('PersonalSchedulePage', () => {
  //   PersonalSchedulePage 페이지 랜더링 테스트
  test('renders PersonalSchedulePage without crashing', () => {
    renderWithRedux(<PersonalSchedulePage />);
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeInTheDocument();
  });

  // 캘린더 랜더링 테스트
  test('renders Calendar component', () => {
    renderWithRedux(<PersonalSchedulePage />);

    // Check if the "월간" button is rendered
    const monthlyButton = screen.getByText(/월간/i);
    expect(monthlyButton).toBeInTheDocument();

    // Check if the "주간" button is rendered
    const weeklyButton = screen.getByText(/주간/i);
    expect(weeklyButton).toBeInTheDocument();
  });

  // 헤더 랜더링 테스트
  test('renders Header component', () => {
    renderWithRedux(<PersonalSchedulePage />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  //  PersonalTodoList 랜더링 테스트
  test('renders PersonalTodoList component', () => {
    renderWithRedux(<PersonalSchedulePage />);
    const personalTodoListElement = screen.getByText(/오늘의 할 일/i);
    expect(personalTodoListElement).toBeInTheDocument();
  });

  //  Modal 랜더링 테스트
  test('renders Modal component', () => {
    renderWithRedux(<PersonalSchedulePage />);
    expect(screen.queryByTestId('modal')).toBeNull();

    const addEventButton = screen.getByText(/일정추가/i);
    fireEvent.click(addEventButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
