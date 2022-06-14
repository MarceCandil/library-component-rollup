import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import visualizer from 'rollup-plugin-visualizer';
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "component-library"
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      // locate and bundle third-party dependencies in node_modules
      resolve(),
      // convert CommonJS modules into ES6
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
          // Exclude story files
          /\.stories.((js|jsx|ts|tsx|mdx))$/,
        ] 
      }),
      postcss(),
      // minify and compress output JavaScript files
      terser(),
      // analyze the bundle output
      visualizer({
        filename: 'bundle-analysis.html',
        open: true,
      }),
      copy({
        targets: [
          {
            src: "src/styles/variables.scss",
            dest: "build",
            rename: "variables.scss"
          }
        ]
      })
    ],
  },
  {
    input: "build/types/index.d.ts",
    output: [{ file: "build/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, 'react', 'react-dom'],
  },
];