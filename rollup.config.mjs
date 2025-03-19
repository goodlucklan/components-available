import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";
import { readFileSync } from "fs";

const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
);

export default {
  input: "src/components/index.ts", // Asegúrate de que este es el entrypoint correcto
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"] }),
    commonjs(),
    url({ include: ["**/*.svg"] }),
    typescript({ tsconfig: "./tsconfig.json", include: ["src/**/*"] }),
  ],
  external: ["react", "react-dom", "styled-components"],
};
