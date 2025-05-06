const { app, BrowserWindow } = require('electron');
const path = require('path');

// 開発モードかどうかをチェック
const isDev = process.env.NODE_ENV === 'development';

// メインウィンドウの参照をグローバルに持つ（GCで消されないように）
let mainWindow;

function createWindow() {
  // メインウィンドウを作成
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // 開発モードの場合はローカルサーバーから読み込む
  if (isDev) {
    console.log('Development mode - loading from localhost:5173');
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    console.log('Production mode - loading from dist/index.html');
    mainWindow.loadFile(path.join(__dirname, '../../dist/index.html'));
  }
  
  // ウィンドウが閉じられたときにnullを設定
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Electronの準備ができたらウィンドウを作成
app.on('ready', createWindow);

// macOSでは、ユーザが Cmd + Q で明示的に終了するまで、
// アプリケーションとそのメニューバーは有効なままにする（macOSの一般的な動作）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリが再度アクティブになったとき（macOSの一般的な動作）
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// コンソールに起動成功メッセージを表示
console.log('Electron main process started');
