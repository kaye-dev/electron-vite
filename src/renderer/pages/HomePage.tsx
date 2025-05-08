import React from 'react';
import { Link } from 'react-router-dom';

// electronAPIのウィンドウオブジェクトへのアクセスの型安全性を確保
interface ElectronWindow extends Window {
  electronAPI?: {
    versions: {
      electron: string;
      node: string;
      chrome: string;
    }
  }
}

const electronWindow = window as ElectronWindow;

function HomePage(): React.ReactElement {
  // electronAPIのバージョン情報を取得
  const electronVersion = electronWindow.electronAPI?.versions?.electron || 'N/A';

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">Hello World</h1>
        <p className="mt-2 text-gray-600">
          Running on Electron {electronVersion}
        </p>
        <div className="mt-4 flex gap-4">
          <Link to="/mypage" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            マイページへ
          </Link>
          <Link to="/settings" className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
            設定へ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
