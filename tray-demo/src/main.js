const electron = require('electron');
const path = require('path');
const {app, Menu, Tray} = electron;


app.on('ready', ()=>{
    const tray = new Tray(path.join('src', 'parrot.ico'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Wow',
            click () {console.log('wow')}
        },
        {
            label: 'Awesome',
            click () {console.log('awsome')}
        },
        {
            label: 'Quit',
            click () {app.quit()}
        }
    ])
    tray.setContextMenu(contextMenu);
    tray.setToolTip('Electron Tray App');
})
