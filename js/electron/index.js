// In the main process.
const electron = require('electron')
const path = require('path')
const url = require('url')
const { app, BrowserWindow } = electron;

let win;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
function createWindow() {

  // Create the browser window.
  win = new BrowserWindow({
    frame: false,
    transparent: true,
    center: true,
    show: false,
    movable: true,
    useContentSize: true,
    maxHeight: 116 * 3,
    maxWidth: 275,
    resizable: false,
    webPreferences: {
      devTools: false,
      allowRunningInsecureContent: true,
    },
    icon: path.join(__dirname, '../../favicon.ico')
  })

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '../../index.html'),
    protocol: 'file:',
    slashes: true
  }))
  

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  // win.webContents.openDevTools();

  win.once('ready-to-show', () => {
    win.show()
  })
  
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

