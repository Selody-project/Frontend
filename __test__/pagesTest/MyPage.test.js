import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import ProfileSettings from '../../src/components/MyPage/ProfileSettings';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ProfileSettings', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback({
        user: {
          user: {
            nickname: 'TestUser',
            email: 'test@example.com',
          },
        },
      });
    });

    render(<ProfileSettings />);
  });

  test('renders ProfileSettings component correctly', () => {
    expect(screen.getByText('프로필')).toBeInTheDocument();
    expect(screen.getByText('닉네임')).toBeInTheDocument();
    expect(screen.getByText('이메일')).toBeInTheDocument();
    expect(screen.getByText('비밀번호')).toBeInTheDocument();
    expect(screen.getByText('변경')).toBeInTheDocument();
    expect(screen.getByText('저장하기')).toBeInTheDocument();
  });

  test('renders input fields with default values', () => {
    expect(screen.getByDisplayValue('TestUser')).toBeInTheDocument();
    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
  });
});
