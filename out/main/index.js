"use strict";
const electron = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
let mainWindow;
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  mainWindow.maximize();
  if (isDev) {
    console.log("Development mode - loading from localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    console.log("Production mode - loading from out/renderer/index.html");
    const rendererPath = path.join(process.resourcesPath, "app.asar", "out", "renderer", "index.html");
    console.log(`Loading renderer from: ${rendererPath}`);
    mainWindow.loadFile(rendererPath);
  }
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}
electron.app.on("ready", createWindow);
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
console.log("Electron main process started");
