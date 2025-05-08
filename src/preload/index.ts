import { contextBridge } from 'electron';
// import { ipcRenderer } from 'electron'; // 将来的に必要になったら復活させる

// グローバルなelectronAPIの型定義
interface ElectronAPI {
  versions: {
    node: string;
    chrome: string;
    electron: string;
  };
  // 将来的に追加する可能性のある他のAPI
  // 例: setTitle: (title: string) => void;
}

// グローバルウィンドウオブジェクトの型拡張
declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

// Electronのバージョン情報をレンダラープロセスに公開
contextBridge.exposeInMainWorld('electronAPI', {
  // ここに必要なメインプロセスとの通信メソッドを追加
  // 例: setTitle: (title) => ipcRenderer.send('set-title', title),
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  }
});

console.log('Preload script loaded');
