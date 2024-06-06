import cjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "dist/index.js",
  output: {
    file: "dist/index.mjs",
  },
  plugins: [resolve(), cjs()],
};
