//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  debug: true,

  virtual: {
    "import-in-the-middle-register": /* js */ `
  import { register } from "node:module";
  console.log("registering import-in-the-middle hook");
  register("import-in-the-middle/hook.mjs", import.meta['url']);
`,
  },
  unenv: {
    polyfill: ["import-in-the-middle-register"],
  },
  externals: {
    external: ["import-in-the-middle"],
    traceInclude: [
      require.resolve("import-in-the-middle/index.js"),
      require.resolve("import-in-the-middle/lib/register.js"),
      require.resolve("import-in-the-middle/hook.mjs"),
    ],
  },
});
