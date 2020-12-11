const { app, BrowserWindow} = require('electron');
let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        fullscreen: true
    });

    mainWindow.setMenuBarVisibility(false);
    //mainWindow.loadURL(`File://${__dirname}/index.html`);
    mainWindow.loadURL(`https://www.hugomesquita.com.br`);

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});