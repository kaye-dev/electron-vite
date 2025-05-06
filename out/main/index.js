"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  if (isDev) {
    console.log("Development mode - loading from localhost:5173");
    mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    console.log("Production mode - loading from dist/index.html");
    mainWindow.loadFile(path.join(__dirname, "../../dist/index.html"));
  }
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
console.log("Electron main process started");
