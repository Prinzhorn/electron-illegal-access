const path = require('path');
const { parentPort } = require('worker_threads');

let timer = setInterval(() => {
  console.log('server is bae');
}, 1000);

parentPort.on('message', async (message) => {
  console.log('closing server...');
  clearInterval(timer);
  console.log('closed server');
  parentPort.postMessage({
    type: 'exit',
  });
});
