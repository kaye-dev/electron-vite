import React from 'react';
import { Link } from 'react-router-dom';

function SettingsPage(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">設定</h1>
        <div className="mt-4 flex gap-4">
          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            ホームへ戻る
          </Link>
          <Link to="/mypage" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
            マイページへ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
