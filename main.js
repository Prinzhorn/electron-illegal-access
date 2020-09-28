const path = require('path');
const { Worker } = require('worker_threads');
const { app, BrowserWindow } = require('electron');

let worker = new Worker(path.join(__dirname, 'server.js'));
let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
});
