# Webpack Dashboard Issue 335 Repro

Repro for `webpack-dashboard` [issue 335](https://github.com/FormidableLabs/webpack-dashboard/issues/335).

Run `yarn start`, the dev server should start without problem.

However, when running `yarn start:dash` which uses `webpack-dashboard`, the dev server crashes with the following error:

```
yarn start:dash
yarn run v1.22.10
$ webpack-dashboard -m -- webpack serve --color --config ./webpack.config.js
TypeError: Cannot read property 'type' of null
    at Socket.<anonymous> (/Users/zicodeng/code/webpack-dashboard-issue-335-repro/node_modules/webpack-dashboard/bin/webpack-dashboard.js:79:21)
    at Socket.emit (events.js:315:20)
    at Socket.emitUntyped (/Users/zicodeng/code/webpack-dashboard-issue-335-repro/node_modules/socket.io/dist/typed-events.js:69:22)
    at /Users/zicodeng/code/webpack-dashboard-issue-335-repro/node_modules/socket.io/dist/socket.js:428:39
    at processTicksAndRejections (internal/process/task_queues.js:79:11)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
