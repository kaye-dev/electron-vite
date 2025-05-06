"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  // ここに必要なメインプロセスとの通信メソッドを追加
  // 例: setTitle: (title) => ipcRenderer.send('set-title', title),
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  }
});
console.log("Preload script loaded");
