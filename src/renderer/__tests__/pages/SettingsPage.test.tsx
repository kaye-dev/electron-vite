import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SettingsPage from '../../pages/SettingsPage';

describe('SettingsPage component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SettingsPage />
      </MemoryRouter>
    );
  });

  test('renders 設定 title', () => {
    const titleElement = screen.getByText(/設定/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('contains link to HomePage', () => {
    const homePageLink = screen.getByText(/ホームへ戻る/i);
    expect(homePageLink).toBeInTheDocument();
    expect(homePageLink.closest('a')).toHaveAttribute('href', '/');
  });

  test('contains link to MyPage', () => {
    const myPageLink = screen.getByText(/マイページへ/i);
    expect(myPageLink).toBeInTheDocument();
    expect(myPageLink.closest('a')).toHaveAttribute('href', '/mypage');
  });
});
