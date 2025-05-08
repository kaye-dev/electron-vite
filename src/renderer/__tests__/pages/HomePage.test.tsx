import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

// モックでelectronAPIを定義
const mockElectronAPI = {
  versions: {
    electron: '1.0.0',
    node: '16.0.0',
    chrome: '100.0.0',
  },
};

// electronAPIのグローバルウィンドウオブジェクトをモック
Object.defineProperty(window, 'electronAPI', {
  value: mockElectronAPI,
  writable: true,
});

describe('HomePage component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });

  test('renders Hello World title', () => {
    const titleElement = screen.getByText(/Hello World/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('displays the Electron version', () => {
    const versionText = screen.getByText(/Running on Electron 1\.0\.0/i);
    expect(versionText).toBeInTheDocument();
  });

  test('contains link to MyPage', () => {
    const myPageLink = screen.getByText(/マイページへ/i);
    expect(myPageLink).toBeInTheDocument();
    expect(myPageLink.closest('a')).toHaveAttribute('href', '/mypage');
  });

  test('contains link to Settings', () => {
    const settingsLink = screen.getByText(/設定へ/i);
    expect(settingsLink).toBeInTheDocument();
    expect(settingsLink.closest('a')).toHaveAttribute('href', '/settings');
  });
});
