const path = require('path');
const { Worker } = require('worker_threads');
const { app, BrowserWindow } = require('electron');

let worker = new Worker(path.join(__dirname, 'server.js'));
let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.close();
});

// This doesn't change anything.

// let cleanedUp = false;

// app.on('before-quit', async (e) => {
//   if (!cleanedUp) {
//     e.preventDefault();
//     await worker.terminate();
//     cleanedUp = true;
//     app.quit();
//   }
// });
