import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyPage from './MyPage';

describe('MyPage component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MyPage />
      </MemoryRouter>
    );
  });

  test('renders マイページ title', () => {
    const titleElement = screen.getByText(/マイページ/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('contains link to HomePage', () => {
    const homePageLink = screen.getByText(/ホームへ戻る/i);
    expect(homePageLink).toBeInTheDocument();
    expect(homePageLink.closest('a')).toHaveAttribute('href', '/');
  });

  test('contains link to Settings', () => {
    const settingsLink = screen.getByText(/設定へ/i);
    expect(settingsLink).toBeInTheDocument();
    expect(settingsLink.closest('a')).toHaveAttribute('href', '/settings');
  });
});
