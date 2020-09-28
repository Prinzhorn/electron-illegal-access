const path = require('path');
const { Worker } = require('worker_threads');
const { app, BrowserWindow } = require('electron');

let worker = null;
let mainWindow = null;

app.on('ready', () => {
  worker = new Worker(path.join(__dirname, 'server.js'));
  mainWindow = new BrowserWindow();
});

let cleanedUp = false;

app.on('before-quit', async function (e) {
  if (!cleanedUp) {
    e.preventDefault();
    console.log('cleaning up...');

    worker.once('message', () => {
      console.log('cleaned up, quiting');
      cleanedUp = true;
      app.quit();
    });

    worker.postMessage('close');
  }
});
