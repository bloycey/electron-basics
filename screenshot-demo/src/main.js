const electron = require('electron');

const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 900,
        resizsable: false,
        frame: false
    })

    mainWindow.openDevTools();

    mainWindow.loadURL(`file://${__dirname}/capture.html`)

    mainWindow.on('close', ()=> {
        mainWindow = null;
    })

    globalShortcut.register('Control+Alt+C', ()=> {
        mainWindow.webContents.send('capture', app.getPath('pictures'))
    })
})