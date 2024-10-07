//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  debug: true,

  rollupConfig: {
    plugins: [
      {
        name: "add-input",
        options(options) {
          if (!options.input) {
            options.input = {};
          }

          // @ts-ignore - options.input is a string
          options.input = [options.input, "./extra-loader-file.ts"];

          // @ts-ignore - options.output exists
          options.output = {
            // @ts-ignore - options.output exists
            ...options.output,
            entryFileNames: (chunk) => {
              if (chunk.facadeModuleId.endsWith("/extra-loader-file.ts")) {
                return "extra-loader-file.mjs";
              } else {
                return "index.mjs";
              }
            },
          };

          return options;
        },
      },
    ],
  },
});
