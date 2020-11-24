# Vue.js 3 / webpack 5 HMR Test

Running `npm run dev2` works, but hot reloading only works the first time when changing `src/vue/app.vue` (e.g. the `console.log` message).
On a second change & file save, the browser only shows `[WDS] App hot update...`.

Running `npm run dev1` fails with the error message `Error: Cannot find module 'webpack-cli/bin/config-yargs'`.

OS: Windows 10
Package versions: See `package.json`
Shell: PowerShell in VSCode
