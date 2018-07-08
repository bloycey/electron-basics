const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow();
    const name = electron.app.getName()
    const template = [
        {
            label: name,
            submenu: [{
                label: `About ${name}`,
                click: () => {
                    console.log('clicked about menu');
                },
                role: 'about'
            },
            {
            label: 'Visit on github',
            click () { electron.shell.openExternal('https://electronjs.org') }
            },
            {
                type: 'separator'   
                },
                {
                label: 'Quit',
                click: () => { app.quit()},
                accelerator: 'CommandOrControl+Q'
                },    
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu)
})