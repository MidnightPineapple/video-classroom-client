const { BrowserWindow, app, ipcMain } = require('electron')

const path = require('path');

process.env.NODE_ENV = "development"

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    if(process.env.NODE_ENV === "production") {
        mainWindow.loadFile(path.join("build", "index.html"));
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadURL("http://localhost:3000");
    }

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    app.quit()
});

ipcMain.on('ready', () => console.log("received"))
