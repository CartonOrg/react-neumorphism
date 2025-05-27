import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    dts({
      include: ["src/lib/**/*.ts", "src/lib/**/*.tsx"],
      exclude: [
        "src/lib/**/*.test.ts",
        "src/lib/**/*.test.tsx",
        "src/lib/Displayer/**/*",
      ],
      outDir: "dist",
      tsconfigPath: resolve(__dirname, "./tsconfig.lib.json"),
      rollupTypes: false,
      insertTypesEntry: true,
      beforeWriteFile: (filePath, content) => {
        return {
          filePath: filePath.replace("/lib/", "/"),
          content,
        };
      },
      aliasesExclude: [/^@types\/.*/],
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      formats: ["es"],
      entry: "./src/lib/index.ts",
      name: "react-neumorphism",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@emotion/react",
        "@emotion/css",
        "@emotion/styled",
        "motion",
        /^@emotion\/.*/,
        /^react(-dom)?$/,
        /^@types\/.*/,
        /^motion(\/.*)?$/,
      ],

      output: {
        globals: {
          "react-dom": "ReactDOM",
          react: "React",
        },
        preserveModules: true,
        preserveModulesRoot: "src/lib",
        inlineDynamicImports: false,
        format: "es",
        entryFileNames: ({ name }) => {
          const cleanName = name.replace("/index", "");

          if (name.includes("_virtual")) {
            return "[name].js";
          }

          return `${cleanName}.js`;
        },
        assetFileNames: (assetInfo) => {
          if (typeof assetInfo.name !== "string") {
            return "assets/[name][extname]";
          }

          if (/\.(css|scss)$/.test(assetInfo.name)) {
            const moduleTypes = [
              "components",
              "types",
              "constants",
              "providers",
            ];

            for (const moduleType of moduleTypes) {
              if (assetInfo.name.includes(`${moduleType}/`)) {
                const moduleName = assetInfo.name
                  .split(`${moduleType}/`)[1]
                  .split("/")[0];

                return `${moduleType}/${moduleName}/styles[extname]`;
              }
            }
          }

          return `assets/[name][extname]`;
        },
      },
    },
  },
});
