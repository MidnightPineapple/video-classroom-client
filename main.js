const { BrowserWindow, app, ipcMain } = require('electron')

const path = require('path');
const url = require('url');

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    app.quit()
});

ipcMain.on('ready', () => console.log("received"))
