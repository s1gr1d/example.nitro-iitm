import * as module from "node:module";

console.log("Hello! This is a log from the external file.");

module.register("import-in-the-middle/hook.mjs", import.meta.url);
