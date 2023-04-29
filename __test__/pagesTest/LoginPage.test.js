/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from '../../src/store/store';
import LoginPage from '../../src/pages/LoginPage';

const renderWithReduxAndRouter = (component) => {
  return render(
    <Provider store={store}>
      <GoogleOAuthProvider clientId="379597382111-vo2ht0r8a3d0ais7v12q7777lu48al1a.apps.googleusercontent.com">
        <BrowserRouter>{component}</BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
};

describe('LoginPage', () => {
  // 로그인 페이지 랜더링 테스트
  test('renders LoginPage without crashing', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const loginHeader = screen.getByText(/LOGIN/i);
    expect(loginHeader).toBeInTheDocument();
  });

  // 네이버로그인 버튼이 있는지 테스트
  test('renders Google login component', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const googleLoginElement = screen.getByTestId('google-login');
    expect(googleLoginElement).toBeInTheDocument();
  });

  // 구글로그인 버튼이 있는지 테스트
  test('renders Naver login component', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const naverLoginElement = screen.getByTestId('naver-login');
    expect(naverLoginElement).toBeInTheDocument();
  });
});
