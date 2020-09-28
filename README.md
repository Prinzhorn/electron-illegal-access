```sh
npm install
npm start
# wait a couple of seconds
# then close the BrowserWindow
```

```
 $ npm start

> electron-illegal-access@1.0.0 start /home/alex/Projects/issues/electron-illegal-access
> electron main.js

hello from server
hello from server
hello from server

undefined:0


illegal access
(Use `node --trace-uncaught ...` to show where the exception was thrown)
/home/alex/Projects/issues/electron-illegal-access/node_modules/electron/dist/electron main.js[44520]: ../../third_party/electron_node/src/node_platform.cc:467:std::shared_ptr<PerIsolatePlatformData> node::NodePlatform::ForIsolate(v8::Isolate *): Assertion `data' failed.
/home/alex/Projects/issues/electron-illegal-access/node_modules/electron/dist/electron exited with signal SIGABRT
```
