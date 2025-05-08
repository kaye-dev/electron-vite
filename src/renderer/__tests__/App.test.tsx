import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// コンポーネントのモック
jest.mock('../pages/HomePage', () => ({
  __esModule: true,
  default: () => <div data-testid="home-page">Home Page</div>
}));
jest.mock('../pages/MyPage', () => ({
  __esModule: true,
  default: () => <div data-testid="my-page">My Page</div>
}));
jest.mock('../pages/SettingsPage', () => ({
  __esModule: true,
  default: () => <div data-testid="settings-page">Settings Page</div>
}));

// react-router-domのモック
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  HashRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Route: ({ path, element }: { path: string; element: React.ReactElement }) => (
    <div data-testid={`route-${path.replace('/', '')}`}>{element}</div>
  )
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('contains correct routes', () => {
    render(<App />);
    
    // 各ルートがレンダリングされていることを確認
    expect(screen.getByTestId('route-')).toBeInTheDocument(); // ルートパス
    expect(screen.getByTestId('route-mypage')).toBeInTheDocument();
    expect(screen.getByTestId('route-settings')).toBeInTheDocument();
    
    // 各コンポーネントがレンダリングされていることを確認
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.getByTestId('my-page')).toBeInTheDocument();
    expect(screen.getByTestId('settings-page')).toBeInTheDocument();
  });
});
