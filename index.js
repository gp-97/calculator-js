const {app, BrowserWindow} = require("electron");

function createWindow() {
    let win = new BrowserWindow({
        "width": 422,
        "height": 578,
        "webPreferences": {
            nodeIntegration: true
        },
        "resizable": false,
        "icon": "assets/favicon.ico"
    });
    win.setMenuBarVisibility(false);
    win.loadFile("index.html");
}

app.on("ready", createWindow);