const electron      = require('electron');
const app           = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url  = require('url');

let mainWindow;

//app.commandLine.appendSwitch('enable-transparent-visuals'); // try add this line

function createWindow () {
	mainWindow = new BrowserWindow({
		name       : "My app window",
		width      : 80,
		height     : 80,
		transparent: true,
		frame      : false,
		toolbar    : false,
		alwaysOnTop: true
	});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes : true
	}));

	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
});