import React from 'react';

function App() {
  // electronAPIのバージョン情報を取得
  const electronVersion = window.electronAPI?.versions?.electron || 'N/A';

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">Hello World</h1>
        <p className="mt-2 text-gray-600">
          Running on Electron {electronVersion}
        </p>
      </div>
    </div>
  );
}

export default App;
