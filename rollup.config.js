import commonjs from "@rollup/plugin-commonjs";
import image from '@rollup/plugin-image';
import json from "@rollup/plugin-json";
import resolve from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import dts from "rollup-plugin-dts";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import visualizer from 'rollup-plugin-visualizer';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "library-component-rollup"
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // convert CommonJS modules into ES6
      peerDepsExternal(),
      resolve(),
      // locate and bundle third-party dependencies in node_modules
      commonjs(),
      json({compact: true}),
      postcss(),
      // minify and compress output JavaScript files
      terser(),
      // analyze the bundle output
      visualizer({
        filename: 'bundle-analysis.html',
        open: false,
      }),
      copy({
        targets: [
          {
            src: "src/styles",
            dest: "build",
            rename: "styles"
          }
        ]
      }),
      image(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        exclude: [
          // Exclude test files
          /\.test.((js|jsx|ts|tsx))$/,
          // Exclude story files
          /\.stories.((js|jsx|ts|tsx|mdx))$/,
        ] 
      }),
    ],
  },
  {
    input: "build/types/index.d.ts",
    output: [
      { 
        file: "build/index.d.ts", 
        format: "esm",
      }
    ],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/, 'react', 'react-dom'],
  },
];