import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import SettingsPage from './pages/SettingsPage';

// メインのAppコンポーネント
function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
