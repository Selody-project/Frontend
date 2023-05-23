import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Landing from '../../src/components/Home/Landing';
import LandingHeader from '../../src/components/Header/LandingHeader';

jest.mock('../../src/utils/links.js', () => ({
  links: [
    { route: '/test1', name: 'Test1' },
    { route: '/test2', name: 'Test2' },
  ],
}));

describe('Landing', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );

    expect(screen.getByText('시작하기')).toBeInTheDocument();

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <LandingHeader />
      </BrowserRouter>
    );

    // 텍스트 존재 확인
    expect(screen.getByText('Selody')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();

    expect(screen.getByText('Test1')).toBeInTheDocument();
    expect(screen.getByText('Test2')).toBeInTheDocument();
  });
});
