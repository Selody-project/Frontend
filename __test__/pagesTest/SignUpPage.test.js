/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import userSlice from '../../src/store/user/user-slice';
import SignUpPage from '../../src/pages/SignUpPage';

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

// 회원가입 페이지 랜더링 테스트
test('renders SignUpPage without crashing', () => {
  renderWithRedux(<SignUpPage />);
});
